import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nextron Electrical & Instrumentation | Oil & Gas Engineering Excellence',
  description: 'Leading provider of electrical and instrumentation services for oil & gas, petrochemical, and industrial facilities. Expert commissioning, maintenance, and engineering solutions for critical operations.',
  keywords: [
    'electrical services oil and gas',
    'instrumentation services',
    'industrial commissioning',
    'plant maintenance',
    'petrochemical electrical',
    'refinery instrumentation',
    'power generation services',
    'E&I contractor',
    'shutdown services',
    'DCS SCADA integration'
  ],
  authors: [{ name: 'Nextron Electrical & Instrumentation' }],
  creator: 'Nextron Electrical & Instrumentation',
  publisher: 'Nextron Electrical & Instrumentation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nextron Electrical & Instrumentation',
    description: 'Electrical & Instrumentation Excellence for Critical Industries',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
