import { Locale, getDictionary } from '@/app/i18n/dictionaries';
import Link from 'next/link';

export default async function MainNavigationBar({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <nav>
      <Link href={`/${lang}`}>{dictionary.home.home}</Link>
      <Link href={`/${lang}/publicsector`}>
        {dictionary.publicSector.publicSector}
      </Link>
    </nav>
  );
}
