"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
  className = "bg-secondary",
}: CTASectionProps) {
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === "/contacto") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      className={cn("py-20 md:py-28 relative overflow-hidden", className)}
    >
      {/* Animated Fluid Waves SVG */}
      <div className="absolute inset-0 opacity-[0.45] pointer-events-none overflow-hidden">
        {/* Capa 1 (Fondo) */}
        <motion.div
          animate={{ x: ["0%", "-5%", "0%"], y: ["0%", "3%", "0%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 w-[120%] -left-[10%] h-full flex items-end"
        >
          <svg
            className="w-full h-auto min-h-[50%]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#085a66"
              fillOpacity="0.5"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </motion.div>

        {/* Capa 2 (Medio) */}
        <motion.div
          animate={{ x: ["-5%", "0%", "-5%"], y: ["0%", "-4%", "0%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 w-[120%] -left-[10%] h-full flex items-end"
        >
          <svg
            className="w-full h-auto min-h-[50%]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0E6F73"
              fillOpacity="0.7"
              d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </motion.div>

        {/* Capa 3 (Frente) */}
        <motion.div
          animate={{ x: ["0%", "5%", "0%"], y: ["0%", "3%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 w-[120%] -left-[10%] h-full flex items-end"
        >
          <svg
            className="w-full h-auto min-h-[50%]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1CA3A8"
              fillOpacity="0.9"
              d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,122.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur-md",
                className.includes("bg-secondary")
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-primary/5 border-primary/10 text-primary",
              )}
            >
              <Sparkles className="w-4 h-4" />
              ¡Descuento exclusivo vía web!
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
              className.includes("bg-secondary")
                ? "text-primary-foreground"
                : "text-foreground",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-lg md:text-xl mb-10",
              className.includes("bg-secondary")
                ? "text-primary-foreground/80"
                : "text-muted-foreground",
            )}
          >
            {description}
          </p>

          <div className="flex justify-center mt-8">
            <Button
              asChild
              size="lg"
              className={cn(
                "h-10 px-8 rounded-full text-base font-bold tracking-wider transition-all hover:scale-105 duration-300 shadow-xl",
                className.includes("bg-secondary")
                  ? "bg-white text-secondary hover:bg-white/90 shadow-white/10"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20",
              )}
            >
              <Link href="/contacto" onClick={handleContactClick}>
                Inicia tu proyecto hoy
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
