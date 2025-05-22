export default function EducationOrganizersTableBody({
  principals
}: Readonly<{ principals: EducationOrganizers[] }>) {
  const tableRows = principals.map((principal) => (
    <tr key={principal.organizationNumber}>
      <th>{principal.organizationNumber}</th>
      <td>{principal.displayName}</td>
      <td>{principal.organizerType}</td>
    </tr>
  ));

  return <tbody>{tableRows}</tbody>;
}
