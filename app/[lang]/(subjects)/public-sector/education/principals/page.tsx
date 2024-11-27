import { Locale } from "@/i18n-config";
import PrincipalsPageContent from "./components/PrincipalsPageContent";
import { getPrincipals } from "./services/SNAE";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function PrincipalsPage({
  params: { lang }
}: Readonly<{ params: { lang: Locale } }>) {
  const [dictionary, principalsRecord] = await Promise.all([
    getDictionary(lang),
    getPrincipals()
  ]);
  return (
    <PrincipalsPageContent
      lang={lang}
      dictionary={dictionary}
      principalsRecord={principalsRecord}
    />
  );
}
