import { i18n, type Locale } from "@/i18n-config";
import type { Metadata } from "next";
import NavigationBar from "./components/NavigationBar";
import { getDictionary } from "./dictionaries";
import { homeLinks } from "./utils/links";

export const metadata: Metadata = {
  title: "Open data",
  description: "Open data application"
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <NavigationBar lang={params.lang} links={homeLinks(dictionary)} />
        {children}
      </body>
    </html>
  );
}
