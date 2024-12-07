import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function Education({ params: { lang } }: UrlParameters) {
  const dictionary = await getDictionary(lang);
  return (
    <Link href={`/${lang}/public-sector/education/principals`}>
      {dictionary.education.principals}
    </Link>
  );
}
