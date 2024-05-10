import { getDictionary } from '../../../i18n/dictionaries';

export default async function PublicSector({
  params,
}: Readonly<{ params: { lang: Locale } }>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <h1>{dictionary.publicSector.publicSector}</h1>
    </>
  );
}
