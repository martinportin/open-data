export default function PrincipalsToolbar({
  params,
}: Readonly<{ params: { dictionary: Dictionary; principals: Principal[] } }>) {
  const { dictionary, principals } = params;
  return (
    <h2>
      {dictionary.principals.quantity} ({principals.length})
    </h2>
  );
}
