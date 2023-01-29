import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://vercel-nine-pink.vercel.app/",
  siteName: "Dxrery Networks",
  siteDescription:
    "Dxrery Networks is a Minecraft Towny server with custom rpg-like features and time-based ranks.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "Map", href: "/map" },
    { label: "About", href: "/about" },
  ],
  social: {
    discord: "https://discord.gg/Ubx7Tvu",
    twitter: "https://twitter.com/hyrbid_alex",
    linkedin: "https://www.linkedin.com/in/imalexcarpenter/",
    instagram: "https://www.instagram.com/alexcarp/",
  },
};
export default siteConfig;
