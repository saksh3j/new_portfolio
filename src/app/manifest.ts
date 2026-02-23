import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saksham Jain (saksh3j) Portfolio",
    short_name: "saksh3j",
    description:
      "Portfolio of Saksham Jain (saksh3j), Software Engineer and early-career Product Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
