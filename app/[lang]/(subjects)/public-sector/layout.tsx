import { Locale } from "@/i18n-config";
import { getDictionary } from "../../dictionaries";
import NavigationBar from "../../components/NavigationBar";
import { publicSectorLinks } from "../../utils/links";

export default async function PublicSectorLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div>
      <NavigationBar lang={params.lang} links={publicSectorLinks(dictionary)} />
      {children}
    </div>
  );
}
