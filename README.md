# DXRERY — Minecraft Wiki & Community Site

A dark-themed RPG wiki and community site for the DXRERY Minecraft server (dxrery.top).

This repository contains a Next.js + TypeScript + Tailwind + MDX site scaffold tailored to mirror the layout and style of pixiesmp.net but with a dark army‑green + gold theme.

Live deployment: (add Vercel link once deployed)

Quick summary
- Pages: Home, Store, Vote, Wiki (MDX content in /content), Rules, Map (Bluemaps embed)
- Server status widget (API route /api/mc/status uses MINECRAFT_SERVER env var)
- Content-driven: edit wiki pages as MDX files in /content/wiki
- Host on Vercel; point dxrery.top to the Vercel project after deployment

Requirements
- Node 18+ (recommended)
- npm or yarn

Getting started (local)
1. Clone:
   git clone https://github.com/kevinadrianpl/minecraft-server.git
2. Install dependencies:
   npm install
3. Create a local env file (.env.local) based on .env.example
4. Run dev server:
   npm run dev

Key environment variables (see .env.example)
- MINECRAFT_SERVER=play.dxrery.top:25565
- BLUEMAPS_URL=https://vanilla.tvpmc.co.za:26357
- DISCORD_INVITE=https://discord.gg/Ubx7Tvu
- STORE_URL=https://example.com/store
- VOTE_URL=https://example.com/vote

Deployment (Vercel)
1. Create a Vercel account and import this GitHub repo.
2. Vercel will detect Next.js automatically. Add the environment variables under Project Settings.
3. Add the domain dxrery.top in Vercel dashboard -> Domains and follow Vercel's DNS instructions. After the site is verified, update your DNS to point to Vercel (Vercel will give step-by-step records).

DNS notes
- After adding dxrery.top to Vercel, you'll be given A/CNAME/ALIAS records. Point your domain registrar's DNS records exactly as Vercel instructs.

Content & contribution
- Wiki pages are MDX files under /content/wiki. Use frontmatter (title, slug, description, date, tags).
- Add content, open a PR; Vercel will create a preview deployment for each PR.

Planned features / TODO
- Leaderboard integration (placeholder on Home now)
- Optional in-site editing via CMS (future)
- Discord auth & comments (future)

If anything should be changed in the plan or the color palette, tell me and I'll update the site.
