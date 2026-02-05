"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FancyButton } from "@/components/shared/buttons/fancy-button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface CTASectionProps {
    title?: string;
    description?: string;
    className?: string;
}

export function CTASection({
    title = "¿Tienes un proyecto en mente?",
    description = "Conversemos sobre cómo podemos ayudarte a hacerlo realidad. Fabricación, ejecución e instalación con los más altos estándares de calidad.",
    className = "bg-secondary"
}: CTASectionProps) {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        siteConfig.contact.whatsappMessage
    )}`;

    return (
        <section className={cn("py-20 md:py-28 relative overflow-hidden", className)}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230E6F73' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className={cn(
                        "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
                        className.includes("bg-secondary") ? "text-primary-foreground" : "text-foreground"
                    )}>
                        {title}
                    </h2>
                    <p className={cn(
                        "text-lg md:text-xl mb-10",
                        className.includes("bg-secondary") ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            variant="outline"
                        >
                            <Link href="/contacto">
                                Solicitar Cotización
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="light"
                        >
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <Phone />
                                Contactar por WhatsApp
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
