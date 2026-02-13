"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactFormSectionProps {
    className?: string;
}

export function ContactFormSection({ className = "" }: ContactFormSectionProps) {
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

        try {
            // Importar Firestore dinámicamente para evitar errores de SSR
            const { db } = await import("@/lib/firebase");
            const { collection, addDoc, Timestamp } = await import("firebase/firestore");

            const now = Timestamp.now();
            // 1. Guardar en colección leads (registro)
            const leadRef = await addDoc(collection(db, "leads"), {
                name: formData.name,
                email: formData.email,
                company: formData.company || "",
                phone: formData.phone || "",
                message: formData.message,
                status: "nuevo",
                createdAt: now,
                updatedAt: now,
            });

            // 2. Crear documento para envío de email (la extensión MailerSend lo procesa)
            await addDoc(collection(db, "emails"), {
                to: [{
                    email: process.env.NEXT_PUBLIC_MAILERSEND_TO_EMAIL,
                    name: "Lizbeth Arana Ramos"
                }],
                from: {
                    email: process.env.NEXT_PUBLIC_MAILERSEND_FROM_EMAIL,
                    name: "Aradiz Web Form",
                },
                reply_to: {
                    email: formData.email,
                    name: formData.name
                },
                template_id: process.env.NEXT_PUBLIC_MAILERSEND_TEMPLATE_ID,
                personalization: [
                    {
                        email: process.env.NEXT_PUBLIC_MAILERSEND_TO_EMAIL,
                        data: {
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone || "No especificado",
                            company: formData.company || "No especificada",
                            message: formData.message,
                            leadId: leadRef.id,
                        },
                    },
                ],
            });

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
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Error desconocido";
            setError(
                `${errorMessage}. Por favor, contáctanos por WhatsApp.`
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={className}>
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
                                        Nombre completo{" "}
                                        <span className="text-destructive">*</span>
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
                                        Email{" "}
                                        <span className="text-destructive">*</span>
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
                                    Mensaje{" "}
                                    <span className="text-destructive">*</span>
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
    );
}
