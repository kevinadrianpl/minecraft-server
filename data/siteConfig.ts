import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://vercel-nine-pink.vercel.app/",
  siteName: "Dxrery Networks",
  siteDescription:
    "Dxrery Networks is a Minecraft Towny server with custom rpg-like features and time-based ranks.",
  siteThumbnail: "/avatar.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
    { label: "Vote", href: "/vote" },
    { label: "Store", href: "/store" },
    { label: "Map", href: "/map" },
  ],
};
export default siteConfig;
