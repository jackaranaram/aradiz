import { useState, useEffect } from "react";

interface ScrollState {
    y: number;
    isScrolled: boolean;
    isVisible: boolean;
    direction: "up" | "down" | null;
}

/**
 * Hook para manejar la lógica de scroll del sitio
 * @param threshold Umbral para marcar isScrolled (default: 20)
 * @param hideThreshold Umbral para empezar a esconder elementos (default: 100)
 */
export function useScroll(threshold = 20, hideThreshold = 100) {
    const [scrollState, setScrollState] = useState<ScrollState>({
        y: 0,
        isScrolled: false,
        isVisible: true,
        direction: null,
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determinar dirección
            const direction = currentScrollY > lastScrollY ? "down" : "up";

            setScrollState({
                y: currentScrollY,
                isScrolled: currentScrollY > threshold,
                // Si estamos subiendo o estamos arriba del umbral de esconder -> visible
                isVisible: direction === "up" || currentScrollY <= hideThreshold,
                direction,
            });

            lastScrollY = currentScrollY;
        };

        // Escuchar scroll
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Ejecutar una vez al montar para synced state inicial
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold, hideThreshold]);

    return scrollState;
}
