'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, MapPin, Calendar } from 'lucide-react';
import type { Project } from '@/types/project';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
    onDelete: (project: Project) => void;
}

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <CardContent className="p-4">
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
