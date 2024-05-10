import { getDictionary } from '@/app/i18n/dictionaries';
import Link from 'next/link';

export default async function PublicSectorNavigationBar({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <nav>
      <Link href={`/${lang}/publicsector/principals`}>
        {dictionary.principals.principals}
      </Link>
    </nav>
  );
}
