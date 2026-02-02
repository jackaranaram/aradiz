import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/admin/", // Por si acaso se añade un panel administrativo luego
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
