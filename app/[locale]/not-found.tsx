'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const englishHeader = 'The page you were looking for cannot be found';
const englishLinkText = 'Home';
const swedishHeader = 'Sidan du försökte nå finns inte';
const swedishLinkText = 'Hem';

export default function NotFound() {
  const path = usePathname();
  const locale = path.split('/')[1];
  return (
    <>
      <h1>{locale === 'sv' ? swedishHeader : englishHeader}</h1>
      <Link href="/">
        {locale === 'sv' ? swedishLinkText : englishLinkText}
      </Link>
    </>
  );
}
