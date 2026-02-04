"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        console.log("Iniciando envío de formulario a Firestore...");
        console.log("Config actual:", {
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
        });

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout: Firebase no responde tras 10 segundos")), 10000)
        );

        try {
            // Save to Firestore with timeout
            const addPromise = addDoc(collection(db, "leads"), {
                ...formData,
                createdAt: serverTimestamp(),
                status: "nuevo",
            });

            await Promise.race([addPromise, timeoutPromise]);

            console.log("Documento guardado exitosamente");
            setIsSuccess(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                message: "",
            });

            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        } catch (err: any) {
            console.error("Error detallado Firebase:", err);
            setError(
                `Error: ${err.message || "Error desconocido"}. Por favor, contáctanos por WhatsApp.`
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: siteConfig.contact.email,
            href: `mailto:${siteConfig.contact.email}`,
        },
        {
            icon: Phone,
            label: "Teléfono",
            value: siteConfig.contact.phone,
            href: `tel:${siteConfig.contact.phone}`,
        },
        {
            icon: MapPin,
            label: "Ubicación",
            value: siteConfig.contact.address,
            href: null,
        },
    ];

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        siteConfig.contact.whatsappMessage
    )}`;

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 bg-background mt-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                            Contacto
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 uppercase">
                            Conversemos sobre tu{" "}
                            <span className="text-primary">proyecto</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Estamos listos para ayudarte. Completa el formulario y nos
                            pondremos en contacto contigo a la brevedad.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                Información de contacto
                            </h2>
                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info) => {
                                    const Icon = info.icon;
                                    return (
                                        <div key={info.label} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-1">
                                                    {info.label}
                                                </p>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-foreground font-medium hover:text-primary transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-foreground font-medium">
                                                        {info.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <Card className="bg-secondary text-secondary-foreground border-0">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">
                                        ¿Prefieres WhatsApp?
                                    </h3>
                                    <p className="text-sm text-secondary-foreground/80 mb-4">
                                        Contáctanos directamente y recibe una respuesta inmediata.
                                    </p>
                                    <Button
                                        asChild
                                        variant="light"
                                        size="sm"
                                        className="w-full"
                                    >
                                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            <Phone className="mr-2 h-4 w-4" />
                                            Abrir WhatsApp
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <Card className="border-border/50">
                                <CardContent className="p-8">
                                    {isSuccess ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-500" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                                ¡Mensaje enviado con éxito!
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Gracias por contactarnos. Nos pondremos en contacto
                                                contigo pronto.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">
                                                        Nombre completo <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="Juan Pérez"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">
                                                        Email <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="juan@empresa.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">Empresa</Label>
                                                    <Input
                                                        id="company"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        placeholder="Nombre de tu empresa"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Teléfono</Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+51 999 999 999"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">
                                                    Mensaje <span className="text-destructive">*</span>
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={6}
                                                    placeholder="Cuéntanos sobre tu proyecto..."
                                                />
                                            </div>

                                            {error && (
                                                <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                                                    {error}
                                                </div>
                                            )}

                                            <Button
                                                type="submit"
                                                size="lg"
                                                variant="secondary"
                                                className="w-full"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                        Enviando...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-5 w-5" />
                                                        Enviar mensaje
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
