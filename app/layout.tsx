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
      {/* https://stackoverflow.com/a/76480526/695787 */}
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
