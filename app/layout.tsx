import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://polyphony.vercel.app/'),
  title: 'Polyphony - a Next.js experiment with Tone.js',
  description:
    'This is a toy Next.js app using mostly client-side components to play with the Tone.js and help me learn some basic React concepts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
