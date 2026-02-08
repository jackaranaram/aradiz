import { Metadata } from "next";
import Image from "next/image";
import { PageHeroSection, ValuesSection, FeatureListSection, CTASection } from "@/components/sections";
import { values, differentiators } from "@/data/values";

export const metadata: Metadata = {
    title: "Nosotros",
    description: "Empresa especializada en fabricación, ejecución e instalación de soluciones a medida para proyectos de interior y obra. Enfoque en cumplimiento técnico y eficiencia.",
};

export default function AboutPage() {
    return (
        <>
            <PageHeroSection
                title="Sobre nosotros"
                highlightedText="nosotros"
                description="Empresa especializada en la fabricación, ejecución e instalación de soluciones a medida para proyectos de interior y obra. Nos enfocamos en el cumplimiento técnico y la eficiencia, trabajando con empresas, estudios de arquitectura, constructoras y desarrolladores inmobiliarios."
            />

            {/* Mission Section */}
            <section className=" w-full">
                <div className="relative w-full">
                    {/* Image Side - Takes left portion */}
                    <div className="relative h-[500px] md:h-[600px] w-full">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20">
                            <Image
                                src="/images/about/about-us.jpg"
                                alt="Equipo de aradiz trabajando en proyecto"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Content Panel - Overlays on right side */}
                        <div className="absolute top-0 right-0 w-full md:w-[65%] lg:w-[60%] h-full bg-foreground text-background p-8 md:p-12 lg:p-16 flex flex-col justify-center md:translate-x-0">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    Nuestra forma de <span className="bg-primary text-white px-2 py-1">trabajo</span>
                                </h2>

                                <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
                                    <p>
                                        En aradiz, no nos dedicamos al diseño arquitectónico, sino a
                                        la <strong className="text-white">ejecución profesional</strong> de las soluciones que
                                        nuestros clientes necesitan. Trabajamos con especificaciones
                                        técnicas precisas y nos comprometemos con el cumplimiento de
                                        plazos y estándares de calidad.
                                    </p>
                                    <p>
                                        Nuestro enfoque está en la <strong className="text-white">fabricación e instalación</strong> de
                                        cortinas técnicas, mobiliario a medida en melamina, sistemas
                                        de vidrio y otras soluciones para proyectos corporativos y de
                                        obra.
                                    </p>
                                    <p>
                                        Entendemos las necesidades del mercado B2B y nos
                                        posicionamos como un socio confiable para la ejecución
                                        técnica de proyectos que demandan precisión, profesionalismo
                                        y resultados garantizados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ValuesSection
                title="Nuestros valores"
                description="Principios que guían nuestro trabajo diario y garantizan la satisfacción de nuestros clientes."
                values={values}
            />

            <FeatureListSection
                title="¿Por qué elegirnos?"
                description="Características que nos diferencian en el mercado B2B"
                features={differentiators}
            />

            <CTASection
                title="Trabajemos juntos en tu próximo proyecto"
                description="Contáctanos para conversar sobre cómo podemos ayudarte a ejecutar tu proyecto con la calidad y profesionalismo que necesitas."
            />
        </>
    );
}
