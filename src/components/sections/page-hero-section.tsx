"use client";

import { motion } from "framer-motion";

interface PageHeroSectionProps {
  title: string;
  highlightedText?: string;
  description: string;
  className?: string;
  id?: string;
}

export function PageHeroSection({
  title,
  highlightedText,
  description,
  className = "mt-15",
  id,
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
    <section id={id} className={`relative py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
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
