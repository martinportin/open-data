import { Locale } from "@/i18n-config";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";

export default async function PublicSector({
  params: { lang }
}: Readonly<{ params: { lang: Locale } }>) {
  const dictionary = await getDictionary(lang);
  return (
    <Link href={`/${lang}/public-sector/education`}>
      {dictionary.publicSector.education}
    </Link>
  );
}
