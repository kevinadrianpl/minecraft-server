type Socials = { [key: string]: string };

type NavItem = { label: string; href: string };

const siteConfig: {
  title: string;
  siteName: string;
  description: string;
  siteDescription: string;
  url: string;
  siteUrl: string;
  siteThumbnail: string;
  socials: Socials;
  social: Socials;
  avatar?: string;
  nav: NavItem[];
} = {
  title: 'DXRERY',
  siteName: 'DXRERY',
  description: 'DXRERY — Minecraft Wiki & Community',
  siteDescription: 'DXRERY — Minecraft Wiki & Community',
  url: 'https://dxrery.top',
  siteUrl: 'https://dxrery.top',
  // default open graph thumbnail (replace if you have a better image)
  siteThumbnail: '/assets/og.png',
  socials: {
    twitter: 'https://twitter.com/yourhandle',
    instagram: 'https://instagram.com/yourhandle',
    github: 'https://github.com/kevinadrianpl',
    linkedin: 'https://www.linkedin.com/in/kevinadrianpl'
  },
  // `social` is a backwards-compatible alias used in some components
  social: {} as Socials,
  // default avatar (optional)
  avatar: '/assets/logo.svg',
  // site navigation used by Header
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Store', href: '/store' },
    { label: 'Wiki', href: '/wiki' }
  ]
};

siteConfig.social = siteConfig.socials;

export default siteConfig;
