import PrincipalsTableHeader from './components/PrincipalsTableHeader';
import PrincipalsTableBody from './components/PrincipalsTableBody';

export default function PrincipalsTable({
  principals
}: Readonly<{ principals: Principal[] }>) {
  return (
    <table>
      <PrincipalsTableHeader />
      <PrincipalsTableBody principals={principals} />
    </table>
  );
}
