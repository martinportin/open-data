import { getDictionary } from '@/app/i18n/dictionaries';
import getPrincipals from './services/naeAPI';
import Principals from './components/Principals';

export default async function PrincipalsPage({
  params,
}: Readonly<{ params: { lang: Locale } }>) {
  const { lang } = params;
  const [dictionary, principals] = await Promise.all([
    getDictionary(lang),
    getPrincipals(),
  ]);
  return (
    <>
      <Principals params={{ dictionary, principals }} />
    </>
  );
}
