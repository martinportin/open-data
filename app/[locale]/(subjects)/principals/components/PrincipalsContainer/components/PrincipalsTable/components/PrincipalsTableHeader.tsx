export default function PrincipalsTableHeader({
  organizationNumber,
  name,
  type
}: Readonly<PrincipalTableHeaderProps>) {
  return (
    <thead>
      <tr>
        <th>{organizationNumber}</th>
        <th>{name}</th>
        <th>{type}</th>
      </tr>
    </thead>
  );
}
