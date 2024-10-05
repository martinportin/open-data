export default function PrincipalsTableHeader({
  dictionary
}: {
  dictionary: Dictionary;
}): JSX.Element {
  return (
    <tr>
      <th>{dictionary.organizationNumber}</th>
      <th>{dictionary.name}</th>
      <th>{dictionary.type}</th>
    </tr>
  );
}
