import { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/dictionaries";
import NavigationBar from "@/app/[lang]/components/NavigationBar";
import { educationLinks } from "@/app/[lang]/utils/links";

export default async function EducationLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div>
      <NavigationBar lang={params.lang} links={educationLinks(dictionary)} />
      {children}
    </div>
  );
}
