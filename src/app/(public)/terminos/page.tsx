import { siteConfig } from "@/config/site";

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Términos de Uso</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="mb-4">
                    Bienvenido a {siteConfig.name}. Al acceder a nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Uso del Sitio</h2>
                <p className="mb-4">
                    El contenido de este sitio es para información general y puede cambiar sin previo aviso. Queda prohibido el uso no autorizado del material gráfico y marcas registradas de {siteConfig.name}.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Servicios</h2>
                <p className="mb-4">
                    Las cotizaciones proporcionadas a través del sitio son referenciales y están sujetas a evaluación técnica directa por parte de nuestro equipo.
                </p>
                <p className="mt-12 text-sm text-muted-foreground">
                    Última actualización: {new Date().toLocaleDateString("es-PE")}
                </p>
            </div>
        </div>
    );
}
