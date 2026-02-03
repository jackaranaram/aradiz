import { Metadata } from "next";
import Link from "next/link";
import { Blinds, Armchair, PanelTop, Wrench, CheckCircle } from "lucide-react";
import { FancyButton } from "@/components/shared/buttons/fancy-button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
    title: "Servicios",
    description: "Servicios profesionales de cortinas técnicas, mobiliario a medida, sistemas de vidrio e instalación para proyectos corporativos.",
};

const services = [
    {
        id: "cortinas-tecnicas",
        icon: Blinds,
        title: "Cortinas Técnicas",
        description: "Soluciones funcionales para control de luz y privacidad",
        fullDescription: "Fabricación e instalación de sistemas de cortinas técnicas para espacios corporativos y comerciales. Ofrecemos cortinas roller, panel screen, persianas verticales y horizontales con acabados profesionales y materiales de alta durabilidad.",
        features: [
            "Cortinas roller blackout y sunscreen",
            "Sistemas motorizados y automatizados",
            "Panel screen para grandes ventanales",
            "Persianas de aluminio y PVC",
            "Instalación técnica profesional",
            "Garantía y mantenimiento",
        ],
    },
    {
        id: "mobiliario-medida",
        icon: Armchair,
        title: "Mobiliario a Medida",
        description: "Fabricación de mobiliario diseñado para cada proyecto",
        fullDescription: "Diseño y fabricación de mobiliario corporativo en melamina de alta calidad. Creamos soluciones a medida para oficinas, recepción, áreas comunes y espacios comerciales con acabados profesionales y funcionalidad óptima.",
        features: [
            "Mobiliario de oficina y recepción",
            "Sistemas de almacenamiento",
            "Estaciones de trabajo modulares",
            "Muebles para áreas comunes",
            "Acabados en melamina premium",
            "Diseño funcional y ergonómico",
        ],
    },
    {
        id: "sistemas-vidrio",
        icon: PanelTop,
        title: "Sistemas de Vidrio",
        description: "Instalación de sistemas de vidrio para obras",
        fullDescription: "Instalación profesional de sistemas de vidrio templado y laminado para divisiones, mamparas, puertas y acabados arquitectónicos. Trabajamos con especificaciones técnicas precisas para proyectos de construcción y remodelación.",
        features: [
            "Mamparas y divisiones de oficina",
            "Puertas de vidrio templado",
            "Barandas y pasamanos",
            "Fachadas y ventanales",
            "Vidrio laminado de seguridad",
            "Instalación con herrajes de calidad",
        ],
    },
    {
        id: "instalacion-profesional",
        icon: Wrench,
        title: "Instalación Profesional",
        description: "Ejecución técnica con precisión y cumplimiento",
        fullDescription: "Servicio de instalación profesional para todos nuestros productos. Contamos con personal técnico capacitado que garantiza la correcta ejecución de cada proyecto, cumpliendo con plazos y especificaciones técnicas.",
        features: [
            "Personal técnico especializado",
            "Cumplimiento de plazos",
            "Supervisión de obra",
            "Control de calidad en sitio",
            "Documentación de entrega",
            "Garantía de instalación",
        ],
    },
];


export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                            Nuestros Servicios
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Soluciones profesionales para proyectos de{" "}
                            <span className="text-primary">interior y obra</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Ofrecemos servicios especializados con enfoque en ejecución,
                            precisión y cumplimiento técnico para proyectos corporativos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Details */}
            {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`py-16 md:py-24 ${isEven ? "bg-background" : "bg-card"}`}
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                {/* Content */}
                                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        {service.fullDescription}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <p className="text-foreground">{feature}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <FancyButton asChild variant={isEven ? "dark" : "primary"}>
                                        <Link href="/contacto">Consultar sobre este servicio</Link>
                                    </FancyButton>
                                </div>

                                {/* Image Placeholder */}
                                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10">
                                        {/* Placeholder - se reemplazará con imágenes reales */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Icon className="w-24 h-24 text-primary/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            <CTASection
                title="¿Necesitas una solución a medida?"
                description="Contáctanos para una consulta personalizada. Analizamos tus necesidades y te ofrecemos la mejor solución técnica."
            />
        </>
    );
}
