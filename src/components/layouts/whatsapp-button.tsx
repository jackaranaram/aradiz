"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        siteConfig.contact.whatsappMessage
    )}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="h-7 w-7" fill="currentColor" />

            {/* Pulse animation */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping" />
        </motion.a>
    );
}
