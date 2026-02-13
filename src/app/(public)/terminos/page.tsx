import { siteConfig } from "@/config/site";

export default function TermsPage() {
    const lastUpdate = new Date().toLocaleDateString("es-PE", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                    Términos y Condiciones
                </h1>
                <p className="text-muted-foreground text-lg">
                    Por favor, lea detenidamente estos términos antes de utilizar nuestros servicios.
                </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-secondary">1. Introducción y Aceptación</h2>
                    <p>
                        Bienvenido al sitio web de <strong>{siteConfig.name}</strong>. El presente documento establece los Términos y Condiciones
                        (en adelante, los "Términos") que rigen el acceso y uso del sitio web <strong>{siteConfig.url}</strong> (en adelante, el "Sitio")
                        y los servicios ofrecidos por <strong>{siteConfig.tagline}</strong> (en adelante, "Aradiz", "nosotros" o "nuestro").
                    </p>
                    <p>
                        Al acceder, navegar o utilizar este Sitio, usted (el "Usuario") reconoce haber leído, entendido y aceptado estos Términos en su totalidad.
                        Si no está de acuerdo con alguna parte de estos términos, le solicitamos abstenerse de utilizar nuestro sitio web y servicios.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">2. Descripción de los Servicios</h2>
                    <p>
                        Aradiz se especializa en la ejecución profesional de soluciones a medida para proyectos de arquitectura interior y obra corporativa.
                        Nuestros servicios incluyen, pero no se limitan a:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Fabricación e instalación de mobiliario a medida.</li>
                        <li>Sistemas de vidrio y carpintería de aluminio.</li>
                        <li>Implementación de cortinas técnicas y revestimientos.</li>
                        <li>Gestión y ejecución de obras civiles menores y acabados.</li>
                    </ul>
                    <p className="mt-4">
                        Toda la información contenida en el Sitio sobre nuestros servicios es referencial. La contratación efectiva de cualquier servicio
                        estará sujeta a la firma de un contrato de servicios específico o la aprobación formal de una cotización técnica.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">3. Propiedad Intelectual</h2>
                    <p>
                        Todo el contenido mostrado en este Sitio, incluyendo pero no limitado a textos, gráficos, logotipos, íconos, imágenes, clips de audio,
                        descargas digitales y compilaciones de datos, es propiedad exclusiva de <strong>Aradiz</strong> o de sus proveedores de contenido
                        y está protegido por las leyes de propiedad intelectual de Perú y tratados internacionales.
                    </p>
                    <p>
                        Queda estrictamente prohibida la reproducción, distribución, modificación, exhibición pública o cualquier otro uso comercial
                        del contenido de este Sitio sin la autorización expresa y por escrito de Aradiz.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">4. Uso Permitido del Sitio</h2>
                    <p>
                        El Usuario se compromete a utilizar el Sitio exclusivamente para fines legales y de manera que no infrinja los derechos de,
                        o restrinja el uso y disfrute del Sitio por parte de cualquier tercero. Queda prohibido:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Utilizar el Sitio para transmitir material ilegal, ofensivo o difamatorio.</li>
                        <li>Intentar interferir con el funcionamiento adecuado y la seguridad del Sitio.</li>
                        <li>Realizar ingeniería inversa o intentar extraer el código fuente del Sitio.</li>
                        <li>Utilizar la marca Aradiz para fines no autorizados o que generen confusión.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">5. Limitación de Responsabilidad</h2>
                    <p>
                        Aradiz se esfuerza por mantener la información del Sitio actualizada y precisa. Sin embargo, no garantizamos que el contenido
                        esté libre de errores u omisiones. Las imágenes de proyectos y acabados son referenciales y pueden variar respecto al producto final
                        debido a factores técnicos o disponibilidad de materiales.
                    </p>
                    <p>
                        En ningún caso Aradiz será responsable por daños directos, indirectos, incidentales o consecuentes que surjan del uso
                        o la imposibilidad de uso de este Sitio, o de cualquier información contenida en él.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">6. Cotizaciones y Propuestas</h2>
                    <p>
                        Las solicitudes de cotización enviadas a través de nuestros formularios web no constituyen un contrato vinculante.
                        Todas las propuestas económicas están sujetas a una validación técnica y disponibilidad de stock.
                        Aradiz se reserva el derecho de rechazar cualquier solicitud de servicio a su entera discreción.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">7. Ley Aplicable y Jurisdicción</h2>
                    <p>
                        Estos Términos se rigen e interpretan de acuerdo con las leyes de la República del Perú. Cualquier disputa relacionada
                        con estos términos o el uso del Sitio será sometida a la jurisdicción exclusiva de los jueces y tribunales del distrito judicial de Lima, Perú.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-secondary">8. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos a través de:
                    </p>
                    <div className="bg-muted p-4 rounded-lg mt-4 border-l-4 border-secondary">
                        <p><strong>Email:</strong> {siteConfig.contact.email}</p>
                        <p><strong>Teléfono:</strong> {siteConfig.contact.phone}</p>
                        <p><strong>Dirección:</strong> {siteConfig.contact.address}</p>
                    </div>
                </section>

                <div className="pt-8 border-t border-border mt-12">
                    <p className="text-sm text-muted-foreground italic">
                        Última actualización: {lastUpdate}
                    </p>
                </div>
            </div>
        </div>
    );
}
