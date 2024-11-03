import { Locale } from "@/i18n-config";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang }
}: Readonly<{ params: { lang: Locale } }>) {
  const dictionary = await getDictionary(lang);
  return <div>{dictionary.principals.public}</div>;
}
