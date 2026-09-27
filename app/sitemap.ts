import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/coaching", "/athletes", "/about", "/contact"].map((path) => ({ url: `${site.url}${path}` }));
}
