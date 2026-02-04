import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Proyectos",
    description: "Portafolio de proyectos ejecutados: oficinas corporativas, hoteles, edificios residenciales y espacios comerciales.",
};

// Todos los proyectos (usaremos las mismas imágenes por ahora)
const allProjects = [
    {
        id: 1,
        title: "Oficinas Corporativas Torre Central",
        category: "Mobiliario a medida",
        location: "San Isidro, Lima",
        year: "2024",
        image: "/images/projects/project-1.jpg",
        description: "Mobiliario corporativo completo con estaciones de trabajo modulares y áreas de recepción.",
    },
    {
        id: 2,
        title: "Hotel Boutique San Isidro",
        category: "Cortinas técnicas",
        location: "San Isidro, Lima",
        year: "2024",
        image: "/images/projects/project-2.jpg",
        description: "Sistema completo de cortinas motorizadas para 80 habitaciones y áreas comunes.",
    },
    {
        id: 3,
        title: "Centro Empresarial Javier Prado",
        category: "Sistemas de vidrio",
        location: "San Isidro, Lima",
        year: "2023",
        image: "/images/projects/project-3.jpg",
        description: "Mamparas de vidrio templado y divisiones para 12 pisos de oficinas corporativas.",
    },
    {
        id: 4,
        title: "Edificio Residencial Miraflores",
        category: "Instalación profesional",
        location: "Miraflores, Lima",
        year: "2023",
        image: "/images/projects/project-4.jpg",
        description: "Mobiliario a medida y cortinas técnicas para 45 departamentos y áreas comunes.",
    },
    {
        id: 5,
        title: "Showroom Automotriz Premium",
        category: "Mobiliario a medida",
        location: "Surco, Lima",
        year: "2024",
        image: "/images/projects/project-5.jpg",
        description: "Mobiliario de exhibición y recepción con acabados de lujo para marca automotriz.",
    },
    {
        id: 6,
        title: "Oficinas Tech Company",
        category: "Mobiliario a medida",
        location: "San Isidro, Lima",
        year: "2023",
        image: "/images/projects/project-1.jpg",
        description: "Estaciones de trabajo colaborativas y salas de reunión para startup tecnológica.",
    },
    {
        id: 7,
        title: "Hotel Ejecutivo Lima",
        category: "Cortinas técnicas",
        location: "Miraflores, Lima",
        year: "2023",
        image: "/images/projects/project-2.jpg",
        description: "Cortinas blackout y sunscreen para 120 habitaciones.",
    },
    {
        id: 8,
        title: "Oficinas Financieras",
        category: "Sistemas de vidrio",
        location: "San Isidro, Lima",
        year: "2024",
        image: "/images/projects/project-3.jpg",
        description: "Divisiones de vidrio de alta seguridad para entidad bancaria.",
    },
];

import { CTASection } from "@/components/sections/cta-section";
import { FancyButton } from "@/components/shared/buttons/fancy-button";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 bg-background mt-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 uppercase">
                            Proyectos destacados para el <span className="text-primary">sector corporativo e inmobiliario.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Desde oficinas corporativas hasta espacios comerciales, cada proyecto refleja nuestro compromiso con la calidad, el diseño y la funcionalidad.
                        </p>
                        <span className="inline-block px-2 py-1.5 mb-2 text-sm font-medium text-primary-foreground bg-secondary/20 uppercase mt-6">
                            Nuestros Proyectos
                        </span>
                    </div>
                </div>
            </section>

            {/* Projects Grid - Bento Style */}
            <section className="py-16 md:py-24">
                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px]">
                        {allProjects.map((project, index) => {
                            // Define custom spans for Bento Grid
                            const bentoSpans = [
                                "md:col-span-2 md:row-span-2", // 1: Large
                                "md:col-span-2 md:row-span-1", // 2: Horizontal
                                "md:col-span-1 md:row-span-2", // 3: Tall
                                "md:col-span-1 md:row-span-1", // 4: Small
                                "md:col-span-2 md:row-span-1", // 5: Horizontal
                                "md:col-span-1 md:row-span-1", // 6: Small
                                "md:col-span-1 md:row-span-1", // 7: Small
                                "md:col-span-1 md:row-span-1", // 8: Small
                            ];
                            const spanClass = bentoSpans[index % bentoSpans.length];

                            return (
                                <div
                                    key={project.id}
                                    className={cn(
                                        "group relative overflow-hidden bg-card border border-border/50 hover:shadow-2xl transition-all duration-500",
                                        spanClass
                                    )}
                                >
                                    {/* Image */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Overlay - Modern gradient */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                    </div>

                                    {/* Content - Absolute positioned */}
                                    <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {/* Category Badge */}
                                            <div className="mb-3">
                                                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                                {project.title}
                                            </h3>

                                            <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                                                    {project.description}
                                                </p>
                                                <div className="flex items-center gap-4 text-[11px] text-gray-400 uppercase tracking-wider font-medium">
                                                    <span>{project.location}</span>
                                                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                                    <span>{project.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect glass shimmer */}
                                    <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection
                title="¿Listo para iniciar tu proyecto?"
                description="Trabajemos juntos para hacer realidad tu visión. Contáctanos para una cotización personalizada."
            />
        </>
    );
}
