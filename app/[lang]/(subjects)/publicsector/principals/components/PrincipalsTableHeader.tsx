export default function PrincipalsTableHeader({
  params,
}: Readonly<{ params: { dictionary: Dictionary } }>) {
  const { dictionary } = params;
  return (
    <thead>
      <tr>
        <th>{dictionary.principals.organizationNumber}</th>
        <th>{dictionary.principals.name}</th>
        <th>{dictionary.principals.type}</th>
      </tr>
    </thead>
  );
}
