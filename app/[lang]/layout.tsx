import { i18n, type Locale } from "@/i18n-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open data",
  description: "Open data application"
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
