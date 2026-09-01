import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
});

export const metadata: Metadata = {
  title: 'Hizaki Labs: RPG Tutor',
  description: 'Practice real-world language scenarios with AI.',
  icons: {
    icon: [
      { url: '/images/icon.svg', type: 'image/svg+xml' },
      { url: '/images/icon.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/images/icon.png', sizes: '180x180' }
    ],
    other: [
      { rel: 'mask-icon', url: '/images/icon.svg', color: '#6366f1' }
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}