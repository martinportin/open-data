export default function PrincipalsTableHeader({
  dictionary
}: Readonly<{
  dictionary: Dictionary;
}>): JSX.Element {
  return (
    <thead>
      <tr>
        <th>{dictionary.organizationNumber}</th>
        <th>{dictionary.name}</th>
        <th>{dictionary.type}</th>
      </tr>
    </thead>
  );
}
