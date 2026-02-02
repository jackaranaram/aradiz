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
        <section className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
                            Sobre Nosotros
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Ejecución profesional para proyectos que demandan excelencia
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            En aradiz nos especializamos en la fabricación, ejecución e
                            instalación de soluciones a medida para proyectos de interior y
                            obra. Trabajamos con empresas, estudios de arquitectura,
                            constructoras y desarrolladores inmobiliarios que buscan un
                            socio confiable para la ejecución técnica de sus proyectos.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Nuestro enfoque está en el cumplimiento técnico, la precisión y
                            la eficiencia, entregando resultados que cumplen con las
                            especificaciones más exigentes del mercado B2B.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-background border border-border/50"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
