import { Metadata } from "next";
import Image from "next/image";

import { PageHeroSection, CTASection } from "@/components/sections";
import { cn } from "@/lib/utils";
import { getProjects } from "@/lib/services/projects";

export const metadata: Metadata = {
    title: "Proyectos",
    description: "Portafolio de proyectos ejecutados: oficinas corporativas, hoteles, edificios residenciales y espacios comerciales.",
};

// Force dynamic rendering to ensure fresh data from Firestore
export const revalidate = 0;


export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <>
            <PageHeroSection
                title="Proyectos destacados para el sector corporativo e inmobiliario."
                highlightedText="sector corporativo e inmobiliario."
                description="Desde oficinas corporativas hasta espacios comerciales, cada proyecto refleja nuestro compromiso con la calidad, el diseño y la funcionalidad."
            />

            {/* Projects Grid or Empty State */}
            <section className="pb-24">
                <div className="w-full mx-auto">
                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px]">
                            {(() => {
                                // Define custom spans for Bento Grid
                                const bentoSpans = [
                                    "md:col-span-2 md:row-span-2", // 1: Large
                                    "md:col-span-2 md:row-span-1", // 2: Horizontal
                                    "md:col-span-1 md:row-span-2", // 3: Tall
                                    "md:col-span-1 md:row-span-1", // 4: Small
                                    "md:col-span-2 md:row-span-1", // 5: Horizontal
                                    "md:col-span-1 md:row-span-1", // 6: Small
                                ];

                                // Combine real projects with placeholders if less than 6
                                // This ensures the Bento Grid always looks complete and premium
                                const displayItems = [...projects];
                                const minItems = 6;

                                return Array.from({ length: Math.max(displayItems.length, minItems) }).map((_, index) => {
                                    const project = displayItems[index];
                                    const spanClass = bentoSpans[index % bentoSpans.length];

                                    if (project) {
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
                                                    <div className="absolute inset-0 bg-linear-to-r from-muted via-muted-foreground/10 to-muted animate-pulse" />
                                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

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

                                                {/* Hover Effect Light */}
                                                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        // Render Placeholder for empty Bento slot to maintain layout integrity
                                        return (
                                            <div
                                                key={`placeholder-${index}`}
                                                className={cn(
                                                    "relative overflow-hidden bg-muted border border-dashed border-border/50 flex flex-col items-center justify-center p-8 text-center",
                                                    spanClass
                                                )}
                                            >
                                                <div className="relative mb-4 opacity-40">
                                                    <div className="absolute -inset-2 border border-(--aradiz-primary)/20 rounded-full animate-pulse" />
                                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-(--aradiz-primary)/20 to-(--aradiz-secondary)/20">
                                                        <span className="text-xl font-bold text-(--aradiz-primary)/40 italic">A</span>
                                                    </div>
                                                </div>
                                                <h4 className="text-(--aradiz-primary)/40 font-bold uppercase tracking-widest text-[10px] mb-1">
                                                    Próximamente
                                                </h4>
                                                <p className="text-[9px] text-muted-foreground/40 max-w-[150px] leading-tight uppercase tracking-tighter">
                                                    Nueva transformación en curso
                                                </p>

                                                {/* Subtle shimmer effect for placeholder */}
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_4s_infinite]" />
                                            </div>
                                        );
                                    }
                                });
                            })()}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 px-6 text-center max-w-3xl mx-auto min-h-[500px]">
                            <div className="relative mb-16 scale-110">
                                {/* Decorative geometric shapes for empty state */}
                                <div className="absolute -inset-8 border border-(--aradiz-primary)/20 rounded-full animate-pulse" />
                                <div className="absolute -inset-12 border border-(--aradiz-accent)/10 rounded-full animate-ping [animation-duration:4s]" />
                                <div className="relative flex h-28 w-28 items-center justify-center rounded-[2.5rem] bg-linear-to-br from-(--aradiz-primary) to-(--aradiz-secondary) shadow-[0_20px_50px_rgba(14,111,115,0.3)] rotate-6 translate-y-3">
                                    <span className="text-5xl font-bold text-white italic -rotate-6 tracking-tighter select-none">A</span>
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-bold text-(--aradiz-primary) mb-8 tracking-tight leading-none">
                                Visiones en proceso de <br className="hidden md:block" /> transformación.
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground/80 mb-14 leading-relaxed font-light max-w-2xl px-4">
                                Estamos documentando nuestros primeros proyectos destacados. Cada espacio cuenta una historia de diseño y funcionalidad que pronto compartiremos contigo.
                            </p>

                            <div className="p-px bg-linear-to-r from-(--aradiz-primary) via-(--aradiz-accent) to-(--aradiz-primary) rounded-full group transition-all active:scale-95 duration-300 hover:shadow-2xl hover:shadow-(--aradiz-primary)/30">
                                <a
                                    href="/contacto"
                                    className="block px-12 py-5 bg-(--aradiz-background) text-(--aradiz-primary) font-black rounded-full transition-all group-hover:bg-transparent group-hover:text-white uppercase tracking-[0.2em] text-xs shadow-inner"
                                >
                                    SÉ EL PRIMERO EN INICIAR
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <CTASection
                title="¿Listo para iniciar tu proyecto?"
                description="Trabajemos juntos para hacer realidad tu visión. Contáctanos para una cotización personalizada."
            />
        </>
    );
}
