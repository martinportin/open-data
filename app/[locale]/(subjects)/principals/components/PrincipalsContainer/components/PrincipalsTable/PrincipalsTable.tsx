import PrincipalsTableHeader from './components/PrincipalsTableHeader';
import PrincipalsTableBody from './components/PrincipalsTableBody';

export default function PrincipalsTable({
  principalsTableHeaderProps,
  principalsTableBodyProps
}: Readonly<PrincipalsTableProps>) {
  return (
    <table>
      <PrincipalsTableHeader {...principalsTableHeaderProps} />
      <PrincipalsTableBody {...principalsTableBodyProps} />
    </table>
  );
}
