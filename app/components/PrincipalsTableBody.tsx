export default function PrincipalsTableBody({
  principals
}: {
  principals: Principal[];
}): JSX.Element {
  const tableRows = principals.map((principal) => (
    <tr key={principal.PerOrgNr}>
      <th>{principal.PerOrgNr}</th>
      <td>{principal.Namn}</td>
      <td>{principal.Typ}</td>
    </tr>
  ));
  return <tbody>{tableRows}</tbody>;
}
