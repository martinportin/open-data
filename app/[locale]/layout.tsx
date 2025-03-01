import type { Metadata } from 'next';
import './globals.css';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

export const metadata: Metadata = {
  title: 'Main Page - Open data',
  description: 'Presents data from open sources'
};

export function generateStaticParams(): { locale: string }[] {
  return i18nConfig.locales.map((locale: string) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={dir(locale)}>
      <body>{children}</body>
    </html>
  );
}
