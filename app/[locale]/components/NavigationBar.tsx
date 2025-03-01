import initTranslations from '@/app/i18n';
import Link from 'next/link';

export default async function NavigationBar({
  locale
}: Readonly<{ locale: string }>) {
  const i18nNamespaces = ['common', 'home', 'principals'];
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <nav>
      <ul>
        <li>
          <Link href={`/${locale}`}>{t('home:home')}</Link>
        </li>
        <li>
          <Link href={`/${locale}/principals`}>
            {t('principals:principals')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
