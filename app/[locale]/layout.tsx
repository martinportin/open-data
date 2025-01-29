import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Open data',
  description: 'Present data from open sources',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
