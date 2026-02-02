import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Rutas estáticas del sitio
    const routes = ["", "/servicios", "/proyectos", "/nosotros", "/contacto"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1 : 0.8,
        })
    );

    return [...routes];
}
