import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Fitness App',
    'Workout Tracker',
    'Gym App',
    'Training App',
    'GPT Import',
    'ChatGPT Trainingsplan',
    'Yoga App',
    'Calisthenics',
    'Radsport App',
    'Fitness Tracking',
    'Trainingsplan App',
    'Deutschland',
  ],
  authors: [{ name: 'KAIAShapes' }],
  creator: 'KAIAShapes',
  publisher: 'KAIAShapes',
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
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShapyFit - Performance Tracking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'de-DE': SITE_CONFIG.url,
    },
  },
  category: 'fitness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    author: {
      '@type': 'Organization',
      name: 'KAIAShapes',
      url: SITE_CONFIG.url,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KAIAShapes',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    sameAs: [SITE_CONFIG.tiktok],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
    },
  };

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center min-h-screen`}>
        <Header />
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
