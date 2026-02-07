'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PageHeroSection } from '@/components/sections';
import { RefreshCcw, AlertCircle } from 'lucide-react';

export default function ProjectsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <>
            <PageHeroSection
                title="Vaya, algo no salió como esperábamos."
                highlightedText="no salió como esperábamos."
                description="Hubo un problema al cargar los proyectos. Por favor, intenta de nuevo."
            />

            <section className="py-24">
                <div className="container mx-auto px-4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                        <AlertCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Error al cargar datos</h2>
                    <p className="text-muted-foreground max-w-md mb-8">
                        No pudimos conectar con la base de datos de proyectos. Esto puede ser un error temporal de conexión.
                    </p>
                    <Button
                        onClick={() => reset()}
                        variant="default"
                        size="lg"
                        className="gap-2"
                    >
                        <RefreshCcw className="w-4 h-4" />
                        Reintentar cargar
                    </Button>
                </div>
            </section>
        </>
    );
}
