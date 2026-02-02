import { Metadata } from "next";
import Link from "next/link";
import { Target, Users, Award, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Conoce a aradiz, empresa especializada en fabricación, ejecución e instalación de soluciones a medida para proyectos corporativos.",
};

const values = [
    {
        icon: Target,
        title: "Cumplimiento Técnico",
        description:
            "Seguimos especificaciones técnicas precisas y estándares de calidad en cada proyecto.",
    },
    {
        icon: Users,
        title: "Equipo Profesional",
        description:
            "Personal capacitado y especializado en fabricación e instalación profesional.",
    },
    {
        icon: Award,
        title: "Calidad Garantizada",
        description:
            "Trabajamos con materiales de primera calidad y ofrecemos garantía en todos nuestros servicios.",
    },
    {
        icon: TrendingUp,
        title: "Mejora Continua",
        description:
            "Nos actualizamos constantemente en técnicas y materiales para ofrecer las mejores soluciones.",
    },
];

const differentiators = [
    "Experiencia comprobada en proyectos B2B",
    "Capacidad de ejecución a gran escala",
    "Cumplimiento estricto de plazos",
    "Equipo técnico especializado",
    "Materiales de alta durabilidad",
    "Supervisión constante de calidad",
    "Documentación completa de proyectos",
    "Soporte post-instalación",
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-linear-to-br from-primary/5 via-background to-secondary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                            Sobre Nosotros
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Somos <span className="text-primary">aradiz</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Empresa especializada en la fabricación, ejecución e instalación
                            de soluciones a medida para proyectos de interior y obra. Nos
                            enfocamos en el cumplimiento técnico y la eficiencia, trabajando
                            con empresas, estudios de arquitectura, constructoras y
                            desarrolladores inmobiliarios.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Nuestra forma de trabajo
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    En aradiz, no nos dedicamos al diseño arquitectónico, sino a
                                    la <strong className="text-foreground">ejecución profesional</strong> de las soluciones que
                                    nuestros clientes necesitan. Trabajamos con especificaciones
                                    técnicas precisas y nos comprometemos con el cumplimiento de
                                    plazos y estándares de calidad.
                                </p>
                                <p>
                                    Nuestro enfoque está en la <strong className="text-foreground">fabricación e instalación</strong> de
                                    cortinas técnicas, mobiliario a medida en melamina, sistemas
                                    de vidrio y otras soluciones para proyectos corporativos y de
                                    obra.
                                </p>
                                <p>
                                    Entendemos las necesidades del mercado B2B y nos
                                    posicionamos como un socio confiable para la ejecución
                                    técnica de proyectos que demandan precisión, profesionalismo
                                    y resultados garantizados.
                                </p>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Users className="w-32 h-32 text-primary/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Nuestros valores
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Principios que guían nuestro trabajo diario y garantizan la
                            satisfacción de nuestros clientes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <Card
                                    key={value.title}
                                    className="border-border/50 hover:shadow-lg transition-shadow"
                                >
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Differentiators Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                ¿Por qué elegirnos?
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Características que nos diferencian en el mercado B2B
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {differentiators.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <p className="text-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                            Trabajemos juntos en tu próximo proyecto
                        </h2>
                        <p className="text-lg text-primary-foreground/80 mb-8">
                            Contáctanos para conversar sobre cómo podemos ayudarte a ejecutar
                            tu proyecto con la calidad y profesionalismo que necesitas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                variant="secondary"
                                className="bg-white text-primary hover:bg-white/90"
                            >
                                <Link href="/contacto">
                                    Solicitar Cotización
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10"
                            >
                                <Link href="/proyectos">Ver Proyectos</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
