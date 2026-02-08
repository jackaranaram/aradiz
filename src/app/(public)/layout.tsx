import { Navbar, Footer, WhatsAppButton, GoogleAnalytics, SplashScreen } from "@/components/layouts";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SplashScreen>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <GoogleAnalytics />
        </SplashScreen>
    );
}
