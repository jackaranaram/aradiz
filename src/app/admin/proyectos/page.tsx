'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Plus, Loader2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ProjectCard } from '@/components/admin/ProjectCard';
import { ProjectDialog } from '@/components/admin/ProjectDialog';
import type { Project } from '@/types/project';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function ProyectosPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Fetch projects
    const fetchProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const projectsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Project[];
            setProjects(projectsData);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Handle create/edit
    const handleSubmit = async (formData: FormData) => {
        setSubmitting(true);
        try {
            const id = formData.get('id') as string | null;
            const title = formData.get('title') as string;
            const description = formData.get('description') as string;
            const category = formData.get('category') as string;
            const location = formData.get('location') as string;
            const year = formData.get('year') as string;
            const imageFile = formData.get('image') as File | null;
            const currentImageUrl = formData.get('currentImageUrl') as string | null;

            let imageUrl = currentImageUrl || '';

            // Upload image if provided
            if (imageFile && imageFile.size > 0) {
                // Delete old image if updating
                if (currentImageUrl) {
                    try {
                        const oldImageRef = ref(storage, currentImageUrl);
                        await deleteObject(oldImageRef);
                    } catch (err) {
                        console.warn('Could not delete old image:', err);
                    }
                }

                // Upload new image
                const imageRef = ref(storage, `projects/${Date.now()}_${imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(imageRef);
            }

            const projectData = {
                title,
                description,
                category,
                location,
                year,
                imageUrl,
                updatedAt: new Date(),
            };

            if (id) {
                // Update existing project
                await updateDoc(doc(db, 'projects', id), projectData);
            } else {
                // Create new project
                await addDoc(collection(db, 'projects'), {
                    ...projectData,
                    createdAt: new Date(),
                });
            }

            await fetchProjects();
            setDialogOpen(false);
            setSelectedProject(null);
        } catch (error) {
            console.error('Error saving project:', error);
            alert('Error al guardar el proyecto');
        } finally {
            setSubmitting(false);
        }
    };

    // Handle delete
    const handleDelete = async () => {
        if (!projectToDelete) return;

        setSubmitting(true);
        try {
            // Delete image if exists
            if (projectToDelete.imageUrl) {
                try {
                    const imageRef = ref(storage, projectToDelete.imageUrl);
                    await deleteObject(imageRef);
                } catch (err) {
                    console.warn('Could not delete image:', err);
                }
            }

            // Delete project document
            await deleteDoc(doc(db, 'projects', projectToDelete.id));
            await fetchProjects();
            setDeleteDialogOpen(false);
            setProjectToDelete(null);
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Error al eliminar el proyecto');
        } finally {
            setSubmitting(false);
        }
    };

    const handleEdit = (project: Project) => {
        setSelectedProject(project);
        setDialogOpen(true);
    };

    const handleDeleteClick = (project: Project) => {
        setProjectToDelete(project);
        setDeleteDialogOpen(true);
    };

    const handleCreate = () => {
        setSelectedProject(null);
        setDialogOpen(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Gestión de Proyectos</h1>
                    <p className="text-muted-foreground mt-1">
                        {projects.length} proyecto{projects.length !== 1 ? 's' : ''} en total
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/proyectos" target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Vista Pública
                        </Link>
                    </Button>
                    <Button onClick={handleCreate}>
                        <Plus className="w-4 h-4 mr-2" />
                        Nuevo Proyecto
                    </Button>
                </div>
            </div>

            {projects.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                    <p className="text-muted-foreground mb-4">No hay proyectos aún</p>
                    <Button onClick={handleCreate}>
                        <Plus className="w-4 h-4 mr-2" />
                        Crear Primer Proyecto
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onEdit={handleEdit}
                            onDelete={handleDeleteClick}
                        />
                    ))}
                </div>
            )}

            <ProjectDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                onSubmit={handleSubmit}
                project={selectedProject}
                loading={submitting}
            />

            <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta acción no se puede deshacer. El proyecto &quot;{projectToDelete?.title}&quot; será eliminado permanentemente.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={submitting}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            disabled={submitting}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Eliminando...
                                </>
                            ) : (
                                'Eliminar'
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
