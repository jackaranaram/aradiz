'use client';

import { useAuth } from '@/lib/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, Mail, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Proyectos', href: '/admin/proyectos', icon: Package },
    { name: 'Leads', href: '/admin/leads', icon: Mail },
];

export function Sidebar() {
    const { user } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/admin/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const SidebarContent = () => (
        <>
            {/* Logo */}
            <div className="p-6 border-b border-border">
                <h1 className="text-xl font-bold text-foreground">Aradiz Admin</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* User info & Logout */}
            <div className="p-4 border-t border-border">
                <div className="mb-3 px-4">
                    <p className="text-sm font-medium text-foreground truncate">
                        {user?.email}
                    </p>
                    <p className="text-xs text-muted-foreground">Administrador</p>
                </div>
                <Button
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    onClick={handleLogout}
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    Cerrar sesión
                </Button>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile menu button */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border p-4 flex items-center justify-between">
                <h1 className="text-lg font-bold">Aradiz Admin</h1>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
            </div>

            {/* Desktop sidebar */}
            <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-card border-r border-border">
                <SidebarContent />
            </aside>

            {/* Mobile sidebar */}
            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Sidebar */}
                    <aside className="md:hidden fixed inset-y-0 left-0 w-64 bg-card border-r border-border z-50 flex flex-col">
                        <SidebarContent />
                    </aside>
                </>
            )}
        </>
    );
}
