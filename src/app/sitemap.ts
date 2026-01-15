import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://saad-arafet.vercel.app"; // URL provisoire, à mettre à jour après achat de domaine si nécessaire

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        // Si vous ajoutez d'autres pages (ex: /blog), ajoutez-les ici
    ];
}
