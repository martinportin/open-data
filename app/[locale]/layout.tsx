import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Open data',
  description: 'Present data from open sources'
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
