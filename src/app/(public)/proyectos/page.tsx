import { Metadata } from "next";
import Image from "next/image";

import { PageHeroSection, CTASection } from "@/components/sections";
import { cn } from "@/lib/utils";
import { getProjects } from "@/lib/services/projects";

export const metadata: Metadata = {
    title: "Proyectos",
    description: "Portafolio de proyectos ejecutados: oficinas corporativas, hoteles, edificios residenciales y espacios comerciales.",
};


export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <>
            <PageHeroSection
                title="Proyectos destacados para el sector corporativo e inmobiliario."
                highlightedText="sector corporativo e inmobiliario."
                description="Desde oficinas corporativas hasta espacios comerciales, cada proyecto refleja nuestro compromiso con la calidad, el diseño y la funcionalidad."
            />

            {/* Projects Grid - Bento Style */}
            <section>
                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px]">
                        {projects.map((project, index) => {
                            // Define custom spans for Bento Grid
                            const bentoSpans = [
                                "md:col-span-2 md:row-span-2", // 1: Large
                                "md:col-span-2 md:row-span-1", // 2: Horizontal
                                "md:col-span-1 md:row-span-2", // 3: Tall
                                "md:col-span-1 md:row-span-1", // 4: Small
                                "md:col-span-2 md:row-span-1", // 5: Horizontal
                                "md:col-span-1 md:row-span-1", // 6: Small
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
                                    {/* Image with Skeleton */}
                                    <div className="absolute inset-0 z-0 bg-muted">
                                        {/* Skeleton shimmer effect - visible until image loads */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            fill
                                            priority={index < 3}
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Default gradient overlay to keep category readable */}
                                        <div className="absolute inset-0 bg-linear-to-br from-foreground via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

                                        {/* Hover solid overlay */}
                                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content - Absolute positioned */}
                                    <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                                        {/* Category Badge - Always at Top */}
                                        <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Info Block - Slides up from Bottom on Hover */}
                                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                                {project.title}
                                            </h3>
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

                                    {/* Reemplaza la línea 86 por esto */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                    </div>
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
