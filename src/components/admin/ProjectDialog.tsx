'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Loader2, Trash2, Upload, Star } from 'lucide-react';
import type { Project } from '@/types/project';
import Image from 'next/image';

interface ProjectDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (data: FormData) => Promise<void>;
    project?: Project | null;
    loading?: boolean;
}

export function ProjectDialog({ open, onOpenChange, onSubmit, project, loading }: ProjectDialogProps) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        location: '',
        year: new Date().getFullYear().toString(),
        featured: false,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // Reset form when dialog opens or project changes
    useEffect(() => {
        if (open) {
            setFormData({
                title: project?.title || '',
                description: project?.description || '',
                category: project?.category || '',
                location: project?.location || '',
                year: project?.year || new Date().getFullYear().toString(),
                featured: project?.featured || false,
            });
            setImageFile(null);
            setImagePreview(project?.imageUrl || null);
        }
    }, [open, project]);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('category', formData.category);
        data.append('location', formData.location);
        data.append('year', formData.year);
        data.append('featured', formData.featured.toString());

        if (imageFile) {
            data.append('image', imageFile);
        }

        if (project) {
            data.append('id', project.id);
            data.append('currentImageUrl', project.imageUrl);
        }

        await onSubmit(data);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{project ? 'Editar Proyecto' : 'Crear Nuevo Proyecto'}</DialogTitle>
                    <DialogDescription>
                        {project ? 'Modifica los detalles del proyecto' : 'Completa los detalles del nuevo proyecto'}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Image Upload */}
                    <div className="space-y-2">
                        <Label>Imagen del Proyecto</Label>
                        {imagePreview ? (
                            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border">
                                <Image
                                    src={imagePreview}
                                    alt="Preview"
                                    fill
                                    className="object-cover"
                                />
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    className="absolute top-2 right-2 z-10"
                                    onClick={handleRemoveImage}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                                <Label htmlFor="image-upload" className="cursor-pointer">
                                    <span className="text-primary hover:underline mx-auto">Seleccionar imagen</span>
                                    <Input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </Label>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <Label htmlFor="title">Título *</Label>
                        <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                            placeholder="Ej: Oficinas Corporativas Lima"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label htmlFor="description">Descripción *</Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                            placeholder="Descripción detallada del proyecto..."
                            rows={4}
                        />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <Label htmlFor="category">Categoría *</Label>
                        <Input
                            id="category"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            required
                            placeholder="Ej: Corporativo, Residencial, Comercial"
                        />
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <Label htmlFor="location">Ubicación *</Label>
                        <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            required
                            placeholder="Ej: Lima, Perú"
                        />
                    </div>

                    {/* Year */}
                    <div className="space-y-2">
                        <Label htmlFor="year">Año *</Label>
                        <Input
                            id="year"
                            type="number"
                            value={formData.year}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            required
                            min="2000"
                            max={new Date().getFullYear()}
                        />
                    </div>

                    {/* Featured Toggle */}
                    <div className="flex items-center justify-between rounded-lg border border-border p-4">
                        <div className="space-y-0.5">
                            <Label htmlFor="featured" className="flex items-center gap-2 text-base font-medium">
                                <Star className="w-4 h-4 text-amber-500" />
                                Proyecto Destacado
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Los proyectos destacados aparecerán primero en la galería.
                            </p>
                        </div>
                        <Switch
                            id="featured"
                            checked={formData.featured}
                            onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                        />
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={loading}
                        >
                            Cancelar
                        </Button>
                        <Button type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Guardando...
                                </>
                            ) : (
                                project ? 'Actualizar' : 'Crear Proyecto'
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
