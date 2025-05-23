'use client';

import EducationOrganizersTableBody from './EducationOrganizersTableBody';
import EducationOrganizersTableHeader from './EducationOrganizersTableHeader';

export default function EducationOrganizersTable({
  educationOrganizers
}: Readonly<{ educationOrganizers: EducationOrganizers[] }>) {
  return (
    <table>
      <EducationOrganizersTableHeader />
      <EducationOrganizersTableBody educationOrganizers={educationOrganizers} />
    </table>
  );
}
