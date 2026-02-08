'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, MapPin, Calendar, GripVertical, Star } from 'lucide-react';
import type { Project } from '@/types/project';
import Image from 'next/image';
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    project: Project;
    onEdit: (project: Project) => void;
    onDelete: (project: Project) => void;
    dragHandleProps?: HTMLAttributes<HTMLButtonElement>;
    isDragging?: boolean;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
    ({ project, onEdit, onDelete, dragHandleProps, isDragging, className, ...props }, ref) => {
        return (
            <Card
                ref={ref}
                className={cn(
                    "overflow-hidden hover:shadow-lg transition-all",
                    isDragging && "shadow-2xl ring-2 ring-primary/50 opacity-90",
                    className
                )}
                {...props}
            >
                <div className="relative h-48 w-full">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-md shadow-lg">
                            <Star className="w-3 h-3 fill-current" />
                            Destacado
                        </div>
                    )}
                    {/* Drag Handle */}
                    <button
                        type="button"
                        className="absolute top-2 right-2 z-10 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-md cursor-grab active:cursor-grabbing transition-colors"
                        {...dragHandleProps}
                    >
                        <GripVertical className="w-4 h-4" />
                    </button>
                </div>
                <CardContent className="pt-4 px-4">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => onEdit(project)}
                        >
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            className="flex-1"
                            onClick={() => onDelete(project)}
                        >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Eliminar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }
);

ProjectCard.displayName = 'ProjectCard';
