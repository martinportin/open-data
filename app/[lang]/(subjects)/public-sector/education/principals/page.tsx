import { Locale } from "@/i18n-config";
import PrincipalsWrapper from "./components/PrincipalsWrapper";
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
    <PrincipalsWrapper
      lang={lang}
      dictionary={dictionary}
      principalsRecord={principalsRecord}
    />
  );
}
