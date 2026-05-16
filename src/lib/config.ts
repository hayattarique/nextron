export const siteConfig = {
  name: 'Nextron Electrical & Instrumentation',
  description: 'Leading provider of electrical and instrumentation services for oil & gas, petrochemical, and industrial facilities.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextron-ei.com',
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextron-ei.com'}/og-image.jpg`,
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '',
    emergency: process.env.NEXT_PUBLIC_EMERGENCY_PHONE ?? '',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? '',
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
