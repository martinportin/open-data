export default function PrincipalsTableHeader({
  dictionary
}: Readonly<{
  dictionary: Dictionary;
}>): JSX.Element {
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
