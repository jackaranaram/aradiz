import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Project } from '@/types/project';

/**
 * Fetches all projects from Firestore, ordered by the 'order' field
 * @returns Promise<Project[]> - Array of project documents
 */
export async function getProjects(): Promise<Project[]> {
    try {
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef, orderBy('order', 'asc'));
        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        } as Project));
    } catch (error) {
        console.error('Error fetching projects from Firestore:', error);
        throw new Error('Failed to load projects');
    }
}
