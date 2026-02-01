import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kacperbartlomiejczak.pl";
  const locales = ["pl", "en"];
  const paths = ["/", "/polityka-prywatnosci"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  paths.forEach((path) => {
    locales.forEach((locale) => {
      // Handle root path specially to avoid extra slash
      const route = path === "/" ? "" : path;
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "/" ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
