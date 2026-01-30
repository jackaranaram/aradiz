/**
 * Arqdiz - Theme Configuration
 * Design tokens y configuración de tema
 */

export const theme = {
    colors: {
        primary: {
            DEFAULT: "#0E6F73",
            light: "#4FB6B1",
            dark: "#0A5256",
        },
        secondary: {
            DEFAULT: "#4F6F3E",
            light: "#6B8F52",
            dark: "#3A522E",
        },
        accent: {
            DEFAULT: "#4FB6B1",
            light: "#7DCCC8",
            dark: "#3A918D",
        },
        text: {
            DEFAULT: "#2E2E2E",
            light: "#5A5A5A",
            muted: "#7A7A7A",
        },
        background: {
            DEFAULT: "#E6ECEB",
            light: "#F5F8F7",
            dark: "#D1DCDA",
        },
    },

    fonts: {
        heading: "var(--font-geist-sans)",
        body: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
    },

    spacing: {
        section: {
            sm: "py-12 md:py-16",
            md: "py-16 md:py-24",
            lg: "py-24 md:py-32",
        },
        container: "px-4 md:px-6 lg:px-8",
    },

    animation: {
        duration: {
            fast: 0.2,
            normal: 0.3,
            slow: 0.5,
        },
        easing: {
            default: [0.4, 0, 0.2, 1],
            bounce: [0.68, -0.55, 0.265, 1.55],
        },
    },
} as const;

export type Theme = typeof theme;
