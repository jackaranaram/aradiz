import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1C1C1C] text-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Image
                            src="/images/logo.png"
                            alt={siteConfig.name}
                            width={140}
                            height={45}
                            className="h-10 w-auto brightness-0 invert"
                        />
                        <p className="text-sm text-background/70 max-w-xs">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Navegación
                        </h4>
                        <nav className="flex flex-col gap-2">
                            {siteConfig.navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-background/70 hover:text-background transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Servicios
                        </h4>
                        <nav className="flex flex-col gap-2">
                            {siteConfig.services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={`/servicios#${service.id}`}
                                    className="text-sm text-background/70 hover:text-background transition-colors"
                                >
                                    {service.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Contacto
                        </h4>
                        <div className="flex flex-col gap-2 text-sm text-background/70">
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="hover:text-background transition-colors"
                            >
                                {siteConfig.contact.email}
                            </a>
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="hover:text-background transition-colors"
                            >
                                {siteConfig.contact.phone}
                            </a>
                            <p>{siteConfig.contact.address}</p>
                        </div>
                    </div>
                </div>

                <Separator className="my-8 bg-background/20" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
                    <p>
                        © {currentYear} {siteConfig.name}. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:text-background transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="/terminos" className="hover:text-background transition-colors">
                            Términos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
