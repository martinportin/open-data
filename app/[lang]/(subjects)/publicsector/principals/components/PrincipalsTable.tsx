import PrincipalsTableBody from './PrincipalsTableBody';
import PrincipalsTableHeader from './PrincipalsTableHeader';

export default function PrincipalsTable({
  params,
  principals,
}: Readonly<{ params: { dictionary: Dictionary }; principals: Principal[] }>) {
  const { dictionary } = params;
  return (
    <table>
      <PrincipalsTableHeader params={{ dictionary }} />
      <PrincipalsTableBody principals={principals} />
    </table>
  );
}
