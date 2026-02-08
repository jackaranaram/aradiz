'use client';

import { useState } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import type { Project, ProjectFormData } from '@/types/project';

export function useProjects() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createProject = async (data: ProjectFormData): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            let imageUrl = '';

            // Upload image if provided
            if (data.image) {
                const imageRef = ref(storage, `projects/${Date.now()}_${data.image.name}`);
                await uploadBytes(imageRef, data.image);
                imageUrl = await getDownloadURL(imageRef);
            }

            // Create project document
            await addDoc(collection(db, 'projects'), {
                title: data.title,
                description: data.description,
                category: data.category,
                location: data.location,
                year: data.year,
                imageUrl,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        } catch (err) {
            console.error('Error creating project:', err);
            setError('Error al crear el proyecto');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateProject = async (id: string, data: ProjectFormData, currentImageUrl?: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            let imageUrl = currentImageUrl || '';

            // Upload new image if provided
            if (data.image) {
                // Delete old image if exists
                if (currentImageUrl) {
                    try {
                        const oldImageRef = ref(storage, currentImageUrl);
                        await deleteObject(oldImageRef);
                    } catch (err) {
                        console.warn('Could not delete old image:', err);
                    }
                }

                // Upload new image
                const imageRef = ref(storage, `projects/${Date.now()}_${data.image.name}`);
                await uploadBytes(imageRef, data.image);
                imageUrl = await getDownloadURL(imageRef);
            }

            // Update project document
            await updateDoc(doc(db, 'projects', id), {
                title: data.title,
                description: data.description,
                category: data.category,
                location: data.location,
                year: data.year,
                imageUrl,
                updatedAt: new Date(),
            });
        } catch (err) {
            console.error('Error updating project:', err);
            setError('Error al actualizar el proyecto');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const deleteProject = async (id: string, imageUrl?: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            // Delete image if exists
            if (imageUrl) {
                try {
                    const imageRef = ref(storage, imageUrl);
                    await deleteObject(imageRef);
                } catch (err) {
                    console.warn('Could not delete image:', err);
                }
            }

            // Delete project document
            await deleteDoc(doc(db, 'projects', id));
        } catch (err) {
            console.error('Error deleting project:', err);
            setError('Error al eliminar el proyecto');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        createProject,
        updateProject,
        deleteProject,
        loading,
        error,
    };
}
