import { Metadata } from "next";
import Image from "next/image";

import { PageHeroSection, CTASection } from "@/components/sections";
import { FancyButton } from "@/components/shared/buttons/fancy-button";
import { cn } from "@/lib/utils";
import { allProjects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Proyectos",
    description: "Portafolio de proyectos ejecutados: oficinas corporativas, hoteles, edificios residenciales y espacios comerciales.",
};


export default function ProjectsPage() {
    return (
        <>
            <PageHeroSection
                title="Proyectos destacados para el sector corporativo e inmobiliario."
                highlightedText="sector corporativo e inmobiliario."
                description="Desde oficinas corporativas hasta espacios comerciales, cada proyecto refleja nuestro compromiso con la calidad, el diseño y la funcionalidad."
            />

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
