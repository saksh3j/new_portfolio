import { contactLinks, profile } from "@/data/portfolio";

const fallbackSiteUrl = "https://saksh3j.vercel.app";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const normalizedSiteUrl = rawSiteUrl?.replace(/\/+$/, "");
const isValidSiteUrl = normalizedSiteUrl
  ? /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(normalizedSiteUrl)
  : false;

export const siteUrl =
  isValidSiteUrl && normalizedSiteUrl ? normalizedSiteUrl : fallbackSiteUrl;

export const siteName = "Saksham Jain (saksh3j)";
export const siteTitle = "Saksham Jain | saksh3j | Software Engineer";
export const siteDescription =
  "Portfolio of Saksham Jain (saksh3j), an early-career Product Engineer with fintech production experience building scalable web applications.";

const sameAsLinks = contactLinks
  .filter((link) => link.external)
  .map((link) => link.href)
  .filter((href) => href.startsWith("https://"));

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "saksh3j",
  url: siteUrl,
  image: `${siteUrl}/favicon.ico`,
  jobTitle: profile.role,
  email: "mailto:jain.merge@gmail.com",
  telephone: "+91-9461489207",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressCountry: "IN",
  },
  sameAs: sameAsLinks,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "en-IN",
  description: siteDescription,
};
