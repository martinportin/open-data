import PublicSectorNavigationBar from './components/PublicSectorNavigationBar';

export default function PublicSectorLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <>
      <PublicSectorNavigationBar params={params} />
      {children}
    </>
  );
}
