import { Locale } from "@/i18n-config";
import { getDictionary } from "./dictionaries";
import Link from "next/link";

export default async function Home({
  params: { lang }
}: Readonly<{ params: { lang: Locale } }>) {
  const dictionary = await getDictionary(lang);
  return <Link href="/public-sector">{dictionary.home.publicSector}</Link>;
}
