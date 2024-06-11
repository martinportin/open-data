export default function PrincipalsTableBody({
  principals,
}: Readonly<{ principals: Principal[] }>) {
  const tableBody = principals.map((principal) => {
    return (
      <tr key={principal.PeOrgNr}>
        <td>{principal.PeOrgNr}</td>
        <td>{principal.Namn}</td>
        <td>{principal.Typ}</td>
      </tr>
    );
  });
  return <tbody>{tableBody}</tbody>;
}
