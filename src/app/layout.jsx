import './globals.css';

export const metadata = {
  metadataBase: new URL('https://lebohang.dev'), // Replace with actual domain later
  title: 'Lebohang Khasipe — Full Stack Developer & Tech Founder (by.lebo)',
  description:
    'Portfolio of Lebohang Khasipe (by.lebo) — Full Stack Developer, Cloud Engineer (MSc Networking & Cloud Computing), SaaS Builder, and Tech Founder. Building Creators Blueprint and scalable cloud systems.',
  keywords: ['Lebohang Khasipe', 'by.lebo', 'Full Stack Developer', 'SaaS', 'Cloud Engineering', 'GCP', 'AWS', 'Next.js', 'React', 'Kubernetes'],
  authors: [{ name: 'Lebohang Khasipe' }],
  creator: 'Lebohang Khasipe',
  openGraph: {
    title: 'Lebohang Khasipe — Tech Founder & Full Stack Developer',
    description: 'First Class Honours BSc IT. MSc Networking & Cloud. Building scalable SaaS platforms and high-performance cloud architectures.',
    url: 'https://lebohang.dev',
    siteName: 'Lebohang Khasipe Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lebohang Khasipe — Tech Founder & Full Stack Developer',
    description: 'First Class Honours BSc IT. MSc Networking & Cloud. Building scalable SaaS platforms and high-performance cloud architectures.',
    creator: '@by_lebo',
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
};

import Header from '../components/layout/Header';
import CustomCursor from '../components/layout/CustomCursor';
import BottomStrip from '../components/sections/BottomStrip';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <BottomStrip />
      </body>
    </html>
  );
}
