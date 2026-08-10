# Project Plan — DXRERY wiki

Goals
- Replace existing repo contents with a new Next.js MDX site mirroring pixiesmp.net layout with a dark army green + gold theme.
- Pages: Home, Store, Vote, Wiki (MDX), Rules, Map (Bluemaps embed)
- Host on Vercel (free tier), point dxrery.top after deployment

MVP Features
- Responsive layout mirroring pixiesmp.net (header + nav, left/right content, prominent hero)
- MDX wiki stored in repo
- Server status widget (calls /api/mc/status)
- Map page embedding Bluemaps with a link to open externally
- Leaderboard placeholder on Home

Design tokens (initial)
- Background: #07120F
- Primary (army green): #1F3B2E
- Surface: #0B1A14
- Accent (gold): #D4AF37
- Text: #E6E6E6

Milestones
1. Scaffolding & README (this commit)
2. Add more MDX content and pages (you)
3. Replace placeholders (logo, external links, leaderboard API)
4. Deploy & point domain

Notes & Risks
- Serverless pings have execution limits on Vercel; a simple ping endpoint is included but if you need high-frequency updates, consider a small VPS later.

