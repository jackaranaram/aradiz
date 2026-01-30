"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Proyectos con imágenes generadas
const projects = [
    {
        id: 1,
        title: "Oficinas Corporativas Torre Central",
        category: "Mobiliario a medida",
        image: "/images/projects/project-1.jpg",
        span: "col-span-2 row-span-2",
    },
    {
        id: 2,
        title: "Hotel Boutique San Isidro",
        category: "Cortinas técnicas",
        image: "/images/projects/project-2.jpg",
        span: "col-span-1 row-span-1",
    },
    {
        id: 3,
        title: "Centro Empresarial Lima",
        category: "Sistemas de vidrio",
        image: "/images/projects/project-3.jpg",
        span: "col-span-1 row-span-1",
    },
    {
        id: 4,
        title: "Edificio Residencial Miraflores",
        category: "Instalación profesional",
        image: "/images/projects/project-4.jpg",
        span: "col-span-1 row-span-2",
    },
    {
        id: 5,
        title: "Showroom Automotriz Premium",
        category: "Mobiliario a medida",
        image: "/images/projects/project-5.jpg",
        span: "col-span-1 row-span-1",
    },
];

export function ProjectsSection() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
                            Portafolio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Proyectos destacados
                        </h2>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/proyectos">
                            Ver todos los proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Projects Grid - Masonry Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-xl bg-muted ${project.span}`}
                        >
                            {/* Project Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-white font-semibold mt-1 text-sm md:text-base">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Hover border effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
