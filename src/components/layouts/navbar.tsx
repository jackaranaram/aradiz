"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { FancyButton } from "@/components/shared/buttons/fancy-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm supports-backdrop-filter:bg-transparent">
            <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex flex-col leading-none">
                    <span className="text-2xl font-bold tracking-tighter text-primary">
                        aradiz
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-foreground/80 uppercase">
                        Grupo Corporativo
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {siteConfig.navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-xs font-medium text-foreground transition-colors hover:text-primary uppercase"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <FancyButton asChild variant="primary" size="sm">
                        <Link href="/contacto">Solicitar Cotización</Link>
                    </FancyButton>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Abrir menú</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <div className="flex flex-col gap-6 mt-8">
                            <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-col leading-none">
                                <span className="text-xl font-bold tracking-tighter text-primary uppercase">
                                    aradiz
                                </span>
                                <span className="text-[9px] font-medium tracking-[0.2em] text-foreground/80 uppercase">
                                    Grupo Corporativo
                                </span>
                            </Link>
                            <nav className="flex flex-col gap-4">
                                {siteConfig.navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <Button asChild className="mt-4">
                                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                                    Solicitar Cotización
                                </Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
