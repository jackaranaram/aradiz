import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function PrivacyPage() {
    const lastUpdate = new Date().toLocaleDateString("es-PE", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="mb-12">
                <h1 className="cursor-pointer text-4xl md:text-5xl font-bold mt-16 mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                    Política de Privacidad
                </h1>
                <p className="text-muted-foreground text-lg">
                    Conozca cómo Aradiz protege su información personal y sus derechos.
                </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-secondary">1. Introducción y Compromiso</h2>
                    <p>
                        En <strong>Aradiz</strong> ({siteConfig.tagline}), estamos comprometidos con la protección de la privacidad y los datos personales
                        de nuestros usuarios y clientes. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y compartimos su información
                        cuando utiliza nuestro sitio web y servicios, en cumplimiento con la <strong>Ley N° 29733 (Ley de Protección de Datos Personales de Perú)</strong> y su Reglamento.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">2. Información que Recopilamos</h2>
                    <p>
                        Podemos recopilar información personal que usted nos proporciona voluntariamente, principalmente a través de:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Formularios de contacto y solicitud de cotizaciones.</li>
                        <li>Correos electrónicos directos o llamadas telefónicas.</li>
                        <li>Suscripciones a boletines informativos (si aplica).</li>
                        <li>Interacciones con nuestras redes sociales oficiales.</li>
                    </ul>
                    <p className="mt-4">
                        Los datos que comúnmente solicitamos incluyen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Nombre completo.</li>
                        <li>Dirección de correo electrónico.</li>
                        <li>Número de teléfono (móvil o fijo).</li>
                        <li>Nombre de la empresa (si actúa en representación de una).</li>
                        <li>Detalles específicos de su proyecto o requerimiento.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">3. Finalidad del Tratamiento de Datos</h2>
                    <p>
                        Utilizamos su información personal estrictamente para los siguientes fines:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mt-2">
                        <li><strong>Prestación de Servicios:</strong> Para procesar sus solicitudes, elaborar presupuestos técnicos y ejecutar los proyectos contratados.</li>
                        <li><strong>Atención al Cliente:</strong> Para responder a dudas, consultas o reclamos relacionados con nuestros servicios.</li>
                        <li><strong>Mejora Continua:</strong> Para analizar el uso de nuestro sitio web y mejorar la experiencia del usuario (mediante datos anónimos).</li>
                        <li><strong>Cumplimiento Legal:</strong> Para cumplir con obligaciones fiscales, contables y legales vigentes en Perú.</li>
                    </ol>
                    <p className="mt-4 text-destructive/80 italic text-sm border-l-2 border-destructive pl-2">
                        No vendemos, alquilamos ni comercializamos su información personal a terceros con fines publicitarios sin su consentimiento explícito.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">4. Seguridad y Almacenamiento</h2>
                    <p>
                        Implementamos medidas de seguridad técnicas, organizativas y legales adecuadas para proteger sus datos personales contra
                        acceso no autorizado, pérdida, alteración o divulgación indebida. Sus datos se almacenan en servidores seguros y solo son accesibles
                        por personal autorizado de Aradiz que requiere dicha información para desempeñar sus funciones laborales.
                    </p>
                    <p>
                        Conservaremos sus datos personales durante el tiempo necesario para cumplir con los fines para los que fueron recopilados,
                        o según lo exijan las leyes aplicables.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">5. Cookies y Tecnologías de Rastreo</h2>
                    <p>
                        Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación.
                        Estas herramientas pueden recopilar información técnica (como su dirección IP, tipo de navegador y páginas visitadas) de forma anónima.
                        Usted puede configurar su navegador para rechazar las cookies, aunque esto podría afectar la funcionalidad de algunas partes del sitio.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">6. Sus Derechos ARCO</h2>
                    <p>
                        Como titular de sus datos personales, usted tiene derecho a ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
                        reconocidos por la Ley de Protección de Datos Personales. Esto significa que usted puede:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Solicitar acceso a los datos que tenemos sobre usted.</li>
                        <li>Solicitar la corrección de datos inexactos o incompletos.</li>
                        <li>Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                        <li>Oponerse al tratamiento de sus datos para fines específicos.</li>
                    </ul>
                    <p className="mt-4">
                        Para ejercer cualquiera de estos derechos, por favor envíe una solicitud escrita a nuestro correo electrónico de contacto.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">7. Enlaces a Terceros</h2>
                    <p>
                        Nuestro sitio web puede contener enlaces a sitios externos de terceros (por ejemplo, redes sociales o socios comerciales).
                        Aradiz no se responsabiliza por las prácticas de privacidad o el contenido de dichos sitios externos. Le recomendamos revisar
                        las políticas de privacidad de cada sitio que visite.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">8. Cambios en la Política</h2>
                    <p>
                        Aradiz se reserva el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento.
                        Cualquier cambio sustancial será notificado a través de este sitio web con la fecha de "Última actualización" renovada.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">9. Contacto</h2>
                    <p>
                        Si tiene preguntas o inquietudes sobre nuestra Política de Privacidad o el tratamiento de sus datos, contáctenos en:
                    </p>
                    <div className="bg-muted p-4 rounded-lg mt-4 border-l-4 border-secondary">
                        <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">{siteConfig.contact.email}</a></p>
                        <p><strong>Teléfono:</strong> {siteConfig.contact.phone}</p>
                        <p><strong>Dirección:</strong> {siteConfig.contact.address}</p>
                    </div>
                </section>

                <div className="pt-8 border-t border-border mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-sm text-muted-foreground italic">
                        Última actualización: {lastUpdate}
                    </p>
                    <Link href="/terminos" className="text-sm text-secondary hover:underline font-medium">
                        Ver Términos y Condiciones &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
