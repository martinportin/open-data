import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import MainNavigationBar from './components/MainNavigationBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open Data',
  description: '',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigationBar params={params} />
        {children}
      </body>
    </html>
  );
}
