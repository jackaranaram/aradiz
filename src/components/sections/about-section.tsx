"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const features = [
    {
        icon: CheckCircle,
        title: "Cumplimiento Técnico",
        description:
            "Ejecutamos cada proyecto siguiendo especificaciones técnicas precisas y estándares de calidad.",
    },
    {
        icon: Award,
        title: "Experiencia Comprobada",
        description:
            "Años de experiencia trabajando con estudios de arquitectura, constructoras y desarrolladores.",
    },
    {
        icon: Clock,
        title: "Entrega a Tiempo",
        description:
            "Nos comprometemos con plazos realistas y los cumplimos, porque entendemos tu cronograma.",
    },
    {
        icon: Users,
        title: "Equipo Profesional",
        description:
            "Personal capacitado y especializado en fabricación e instalación de soluciones a medida.",
    },
];

export function AboutSection() {
    return (
        <section className="w-full">
            <div className="relative w-full">
                {/* Image Side - Takes full width */}
                <div className="relative h-[500px] md:h-[550px] w-full">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/20">
                        {/* Placeholder - Replace with actual image */}
                        <div className="w-full h-full flex items-center justify-center">
                            <Users className="w-32 h-32 text-primary/30" />
                        </div>
                    </div>

                    {/* Content Panel - Overlays on right side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-0 right-0 w-full md:w-[65%] lg:w-[60%] h-full bg-linear-to-b from-background via-background to-white text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                    >
                        <div className="max-w-3xl">
                            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
                                Sobre Nosotros
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
                                Ejecución profesional para proyectos que demandan <span className="bg-primary text-white px-2">excelencia</span>
                            </h2>

                            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    En aradiz nos especializamos en la fabricación, ejecución e
                                    instalación de soluciones a medida para proyectos de interior y
                                    obra. Trabajamos con empresas, estudios de arquitectura,
                                    constructoras y desarrolladores inmobiliarios que buscan un
                                    socio confiable para la ejecución técnica de sus proyectos.
                                </p>
                                <p>
                                    Nuestro enfoque está en el cumplimiento técnico, la precisión y
                                    la eficiencia, entregando resultados que cumplen con las
                                    especificaciones más exigentes del mercado B2B.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
