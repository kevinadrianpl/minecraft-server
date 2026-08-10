type Socials = { [key: string]: string };

const siteConfig: {
  title: string;
  description: string;
  url: string;
  socials: Socials;
  social: Socials;
} = {
  title: 'DXRERY',
  description: 'DXRERY — Minecraft Wiki & Community',
  url: 'https://dxrery.top',
  socials: {
    twitter: 'https://twitter.com/yourhandle',
    instagram: 'https://instagram.com/yourhandle',
    github: 'https://github.com/kevinadrianpl',
    linkedin: 'https://www.linkedin.com/in/kevinadrianpl'
  },
  // `social` exists for backwards compatibility with components that use siteConfig.social
  social: {} as Socials
};

siteConfig.social = siteConfig.socials;

export default siteConfig;
