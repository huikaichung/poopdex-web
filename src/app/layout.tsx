import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PoopDex - AI Poop Health Analyzer',
  description: 'Turn your bathroom breaks into adventures. AI-powered poop analysis with Bristol Scale classification, funny comments, and a collection system.',
  keywords: ['poop', 'health', 'gut', 'bristol scale', 'ai', 'analyzer'],
  openGraph: {
    title: 'PoopDex',
    description: 'Turn your bathroom breaks into adventures',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0f0f1a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
