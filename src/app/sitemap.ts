import type { MetadataRoute } from "next";
import { cases, siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/data-analytics", "/management-consulting", "/project-manager", "/service-industries", "/main-experties", "/about/company", "/about/capabilities", "/case-studies", "/consultation-appointment", "/policy-privacy", ...cases.map((item) => `/${item.slug}`)];
  return paths.map((path) => ({ url: `${siteUrl}${path}/`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
