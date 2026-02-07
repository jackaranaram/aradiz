import { PageHeroSection } from "@/components/sections";

export default function ProjectsLoading() {
    return (
        <>
            <PageHeroSection
                title="Proyectos destacados para el sector corporativo e inmobiliario."
                highlightedText="sector corporativo e inmobiliario."
                description="Cargando nuestro portafolio de proyectos..."
            />

            <section>
                <div className="w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-1">
                        {[1, 2, 3, 4, 5, 6].map((i) => {
                            const bentoSpans = [
                                "md:col-span-2 md:row-span-2",
                                "md:col-span-2 md:row-span-1",
                                "md:col-span-1 md:row-span-2",
                                "md:col-span-1 md:row-span-1",
                                "md:col-span-2 md:row-span-1",
                                "md:col-span-1 md:row-span-1",
                            ];
                            const spanClass = bentoSpans[(i - 1) % bentoSpans.length];

                            return (
                                <div
                                    key={i}
                                    className={`${spanClass} relative overflow-hidden bg-muted animate-pulse border border-border/50`}
                                >
                                    <div className="absolute inset-0 bg-linear-to-br from-black/5 to-transparent" />
                                    <div className="relative h-full p-8 flex flex-col justify-between">
                                        <div className="w-24 h-4 bg-muted-foreground/20 rounded-sm" />
                                        <div className="space-y-4">
                                            <div className="w-2/3 h-8 bg-muted-foreground/20 rounded-sm" />
                                            <div className="w-full h-4 bg-muted-foreground/20 rounded-sm" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
