"use client";

import { motion } from "framer-motion";

interface PageHeroSectionProps {
    title: string;
    highlightedText?: string;
    description: string;
    badge?: string;
    className?: string;
}

export function PageHeroSection({
    title,
    highlightedText,
    description,
    badge,
    className = "mt-28",
}: PageHeroSectionProps) {
    // Split title to insert highlighted text if provided
    const renderTitle = () => {
        if (!highlightedText) {
            return title;
        }

        // Find the highlighted text in the title
        const parts = title.split(highlightedText);
        return (
            <>
                {parts[0]}
                <span className="text-primary">{highlightedText}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <section className={`relative py-16 bg-background ${className}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230E6F73' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 uppercase">
                        {renderTitle()}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
