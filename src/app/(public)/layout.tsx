import { Navbar, Footer, WhatsAppButton, GoogleAnalytics } from "@/components/layouts";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <GoogleAnalytics />
        </>
    );
}
