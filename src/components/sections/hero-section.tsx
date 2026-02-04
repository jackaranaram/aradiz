"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FancyButton } from "@/components/shared/buttons/fancy-button";
import { siteConfig } from "@/config/site";
import { useState, useEffect, useCallback } from "react";

// Imágenes del carrusel - agrega tus imágenes aquí
const carouselImages = [
    "/images/hero-background.jpeg",
    "/images/hero-background-2.jpeg",
    "/images/hero-background-3.jpeg",
];

export function HeroSection() {
    const [offset, setOffset] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Duplicamos las imágenes para crear el efecto infinito
    const infiniteImages = [...carouselImages, ...carouselImages, ...carouselImages];

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setOffset((prev) => prev - 1);
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setOffset((prev) => prev + 1);
    }, [isTransitioning]);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        // Calculate the target offset to bring the desired image to the "active" position.
        // The active image is at carouselImages.length + currentImageIndex.
        // We want to move to carouselImages.length + index.
        // So, the new offset should be -(index - currentImageIndex).
        // Let's find the current active image index first.
        const currentActiveIndex = (carouselImages.length - offset % carouselImages.length) % carouselImages.length;
        const targetOffset = offset - (index - currentActiveIndex);
        setOffset(targetOffset);
    }, [isTransitioning, offset]);

    const handleAnimationComplete = useCallback(() => {
        setIsTransitioning(false);

        // Saltar cuando completamos un ciclo completo
        // Si avanzamos más allá del segundo set, volver al segundo set
        if (offset <= -carouselImages.length) {
            setOffset(offset + carouselImages.length);
        }
        // Si retrocedemos más allá del segundo set, avanzar al segundo set
        else if (offset >= carouselImages.length) {
            setOffset(offset - carouselImages.length);
        }
    }, [offset]);

    // Auto-play del carrusel
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);


    return (
        <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-foreground">

            {/* Carousel Container */}
            <div className="w-full h-[100vh] relative z-10 overflow-hidden">
                {/* Track del carrusel - Contiene TODAS las imágenes duplicadas */}
                <motion.div
                    className="flex h-full gap-4"
                    animate={{
                        x: `calc(${offset - carouselImages.length} * (100vw - 5rem + 16px))`,
                    }}
                    transition={
                        isTransitioning
                            ? {
                                type: "spring",
                                stiffness: 100,
                                damping: 50,
                            }
                            : {
                                duration: 0, // Salto instantáneo
                            }
                    }
                    onAnimationComplete={handleAnimationComplete}
                >
                    {/* Renderizar imágenes duplicadas */}
                    {infiniteImages.map((image, index) => (
                        <div
                            key={`${image}-${index}`}
                            className="relative overflow-hidden flex-shrink-0"
                            style={{
                                width: `calc(100vw - 5rem)`,
                            }}
                        >
                            <div
                                className="h-full w-full bg-center bg-cover"
                                style={{
                                    backgroundImage: `url("${image}")`,
                                }}
                                role="img"
                                aria-label={`Slide ${(index % carouselImages.length) + 1}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                        </div>
                    ))}
                </motion.div>

                {/* Controles de navegación - sobre el carrusel */}
                <div className="absolute bottom-8 right-28 flex gap-2 z-20 text-background">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-foreground backdrop-blur-sm hover:bg-foreground transition-colors"
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-foreground backdrop-blur-sm hover:bg-foreground transition-colors"
                        aria-label="Siguiente imagen"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                {/* Indicadores de slides */}
                <div className="absolute bottom-10 left-32 flex gap-2 z-20 cursor-pointer">
                    {carouselImages.map((image, index) => {
                        // Calcular qué imagen está actualmente visible
                        const currentActiveIndex = Math.abs((carouselImages.length - offset) % carouselImages.length);

                        return (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentActiveIndex
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                                    }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        );
                    })}
                </div>

                {/* Contenido de texto - overlay sobre el carrusel */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-background/90 via-transparent to-transparent">
                    <div className="container mx-auto h-full px-4 md:px-6 relative z-10 flex flex-col justify-center items-start pointer-events-auto">
                        <div className="max-w-4xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-5xl md:text-8xl font-extrabold tracking-tighter text-foreground mb-8 uppercase leading-[0.9]"
                            >
                                Ejecución profesional de{" "}
                                <span className="text-primary">soluciones a medida</span> para
                                proyectos de interior y obra
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-8 justify-start items-center"
                            >
                                <FancyButton asChild variant="dark" showKeys={false}>
                                    <Link href="/proyectos">Ver Proyectos</Link>
                                </FancyButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
}
