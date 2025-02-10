export default function PrincipalsTableBody({
  principals
}: Readonly<PrincipalTableBodyProps>) {
  const tableRows = principals.map((principal) => (
    <tr key={principal.PeOrgNr}>
      <th>{principal.PeOrgNr}</th>
      <td>{principal.Namn}</td>
      <td>{principal.Typ}</td>
    </tr>
  ));
  return <tbody>{tableRows}</tbody>;
}
