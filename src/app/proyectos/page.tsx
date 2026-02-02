import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function ProjectsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-linear-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver al inicio
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Nuestros <span className="text-primary">Proyectos</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Conoce algunos de los proyectos que hemos ejecutado para empresas,
                            estudios de arquitectura, constructoras y desarrolladores
                            inmobiliarios.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span>{project.location}</span>
                                        <span>•</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            ¿Listo para iniciar tu proyecto?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Trabajemos juntos para hacer realidad tu visión. Contáctanos para
                            una cotización personalizada.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contacto">Solicitar Cotización</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
