export default function PrincipalsHeader({
  params,
}: Readonly<{ params: { dictionary: Dictionary } }>) {
  const { dictionary } = params;
  return <h1>{dictionary.principals.principals}</h1>;
}
