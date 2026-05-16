export const siteConfig = {
  name: 'Nextron Electrical & Instrumentation',
  description: 'Leading provider of electrical and instrumentation services for oil & gas, petrochemical, and industrial facilities.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextronei.com',
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextronei.com'}/og-image.jpg`,
  contact: {
    email:     process.env.NEXT_PUBLIC_CONTACT_EMAIL     ?? 'nextronei@gmail.com',
    phone:     process.env.NEXT_PUBLIC_CONTACT_PHONE     ?? '+966-503350038',
    emergency: process.env.NEXT_PUBLIC_EMERGENCY_PHONE   ?? '+966-503350038',
    whatsapp:  process.env.NEXT_PUBLIC_WHATSAPP_PHONE    ?? '+966-503350038',
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
