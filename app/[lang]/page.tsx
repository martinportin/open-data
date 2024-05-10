import { getDictionary } from '../i18n/dictionaries';

export default async function Home({
  params,
}: Readonly<{
  params: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <h1>Open Data</h1>
    </main>
  );
}
