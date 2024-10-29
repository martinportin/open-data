import PrincipalsTableHeader from "./PrincipalsTableHeader";
import PrincipalsTableBody from "./PrincipalsTableBody";

export default function PrincipalsTable({
  dictionary,
  principals
}: Readonly<{
  dictionary: Dictionary;
  principals: Principal[];
}>): JSX.Element {
  return (
    <table>
      <PrincipalsTableHeader dictionary={dictionary} />
      <PrincipalsTableBody principals={principals} />
    </table>
  );
}
