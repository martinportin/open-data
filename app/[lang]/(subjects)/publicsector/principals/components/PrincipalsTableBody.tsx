export default function PrincipalsTableBody({
  params,
}: Readonly<{ params: { principals: Principal[] } }>) {
  const { principals } = params;
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
