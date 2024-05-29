import PrincipalsTableBody from './PrincipalsTableBody';
import PrincipalsTableHeader from './PrincipalsTableHeader';

export default function PrincipalsTable({
  params,
}: Readonly<{ params: { dictionary: Dictionary; principals: Principal[] } }>) {
  const { dictionary, principals } = params;
  return (
    <table>
      <PrincipalsTableHeader params={{ dictionary }} />
      <PrincipalsTableBody params={{ principals }} />
    </table>
  );
}
