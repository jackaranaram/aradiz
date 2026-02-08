'use client';

import { ProtectedRoute } from '@/components/admin/ProtectedRoute';
import { Sidebar } from '@/components/admin/Sidebar';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';

    // Don't wrap login page with ProtectedRoute
    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-background">
                <Sidebar />
                <main className="md:pl-64 pt-16 md:pt-0">
                    <div className="p-6 md:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
}
