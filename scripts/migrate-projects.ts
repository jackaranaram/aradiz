/**
 * Migration Script: Upload Projects to Firestore + Storage
 * 
 * This script:
 * 1. Reads existing project data from projects.ts
 * 2. Uploads images from /public/images/projects/ to Firebase Storage
 * 3. Creates Firestore documents with Storage URLs
 * 
 * Run with: node --loader ts-node/esm scripts/migrate-projects.ts
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Firebase Admin
if (getApps().length === 0) {
    // You'll need to download your service account key from Firebase Console
    // and save it as service-account-key.json in the root directory
    const serviceAccount = JSON.parse(
        readFileSync(join(__dirname, '..', 'service-account-key.json'), 'utf-8')
    );

    initializeApp({
        credential: cert(serviceAccount),
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
}

const db = getFirestore();
const storage = getStorage().bucket();

// Existing project data
const projects = [
    {
        id: 1,
        title: "Oficinas Corporativas Torre Central",
        category: "Mobiliario a medida",
        location: "San Isidro, Lima",
        year: "2024",
        image: "project-1.jpg",
        description: "Mobiliario corporativo completo con estaciones de trabajo modulares y áreas de recepción.",
    },
    {
        id: 2,
        title: "Hotel Boutique San Isidro",
        category: "Cortinas técnicas",
        location: "San Isidro, Lima",
        year: "2024",
        image: "project-2.jpg",
        description: "Sistema completo de cortinas motorizadas para 80 habitaciones y áreas comunes.",
    },
    {
        id: 3,
        title: "Centro Empresarial Javier Prado",
        category: "Sistemas de vidrio",
        location: "San Isidro, Lima",
        year: "2023",
        image: "project-3.jpg",
        description: "Mamparas de vidrio templado y divisiones para 12 pisos de oficinas corporativas.",
    },
    {
        id: 4,
        title: "Edificio Residencial Miraflores",
        category: "Instalación profesional",
        location: "Miraflores, Lima",
        year: "2023",
        image: "project-4.jpg",
        description: "Mobiliario a medida y cortinas técnicas para 45 departamentos y áreas comunes.",
    },
    {
        id: 5,
        title: "Showroom Automotriz Premium",
        category: "Mobiliario a medida",
        location: "Surco, Lima",
        year: "2024",
        image: "project-5.jpg",
        description: "Mobiliario de exhibición y recepción con acabados de lujo para marca automotriz.",
    },
    {
        id: 6,
        title: "Oficinas Tech Company",
        category: "Mobiliario a medida",
        location: "San Isidro, Lima",
        year: "2023",
        image: "project-1.jpg",
        description: "Estaciones de trabajo colaborativas y salas de reunión para startup tecnológica.",
    },
];

async function uploadImageToStorage(imageName: string): Promise<string> {
    const localPath = join(__dirname, '..', 'public', 'images', 'projects', imageName);
    const storagePath = `projects/${imageName}`;

    console.log(`📤 Uploading ${imageName} to Storage...`);

    const fileBuffer = readFileSync(localPath);
    const file = storage.file(storagePath);

    await file.save(fileBuffer, {
        metadata: {
            contentType: 'image/jpeg',
        },
        public: true, // Make the file publicly accessible
    });

    // Get public URL
    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${encodeURIComponent(storagePath)}?alt=media`;

    console.log(`✅ Uploaded: ${publicUrl}`);
    return publicUrl;
}

async function migrateProjects() {
    console.log('🚀 Starting migration...\n');

    for (const project of projects) {
        try {
            console.log(`\n📦 Processing: ${project.title}`);

            // Upload image to Storage
            const imageUrl = await uploadImageToStorage(project.image);

            // Create Firestore document
            const docRef = db.collection('projects').doc();
            await docRef.set({
                title: project.title,
                category: project.category,
                location: project.location,
                year: project.year,
                imageUrl: imageUrl,
                description: project.description,
                featured: false,
                order: project.id,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            console.log(`✅ Created Firestore document: ${docRef.id}`);
        } catch (error) {
            console.error(`❌ Error processing ${project.title}:`, error);
        }
    }

    console.log('\n\n🎉 Migration complete!');
    console.log('Next steps:');
    console.log('1. Deploy Firestore rules: firebase deploy --only firestore:rules');
    console.log('2. Deploy Storage rules: firebase deploy --only storage');
    console.log('3. Verify data in Firebase Console');
}

// Run migration
migrateProjects().catch(console.error);
