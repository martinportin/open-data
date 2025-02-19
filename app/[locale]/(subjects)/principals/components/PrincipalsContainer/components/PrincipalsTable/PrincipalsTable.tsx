import PrincipalsTableHeader from './components/PrincipalsTableHeader';
import PrincipalsTableBody from './components/PrincipalsTableBody';

export default function PrincipalsTable({
  principals
}: Readonly<PrincipalsTableProps>) {
  return (
    <table>
      <PrincipalsTableHeader />
      <PrincipalsTableBody principals={principals} />
    </table>
  );
}
