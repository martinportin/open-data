export default function EducationOrganizersTableBody({
  educationOrganizers
}: Readonly<{ educationOrganizers: EducationOrganizers[] }>) {
  const tableRows = educationOrganizers.map((organizer) => (
    <tr key={organizer.organizationNumber}>
      <th>{organizer.organizationNumber}</th>
      <td>{organizer.displayName}</td>
      <td>{organizer.organizerType}</td>
    </tr>
  ));

  return <tbody>{tableRows}</tbody>;
}
