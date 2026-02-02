import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="mb-4">
          En {siteConfig.name}, valoramos tu privacidad. Esta política describe cómo manejamos la información recolectada a través de nuestro sitio web.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Recolección de Datos</h2>
        <p className="mb-4">
          Solo recolectamos los datos que nos proporcionas voluntariamente a través de nuestro formulario de contacto (Nombre, Email, Empresa, Teléfono y Mensaje).
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Uso de la Información</h2>
        <p className="mb-4">
          La información se utiliza exclusivamente para responder a tus consultas y proporcionar los servicios solicitados. No compartimos tu información con terceros.
        </p>
        <p className="mt-12 text-sm text-muted-foreground">
          Última actualización: {new Date().toLocaleDateString("es-PE")}
        </p>
      </div>
    </div>
  );
}
