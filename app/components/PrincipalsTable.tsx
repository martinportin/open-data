import PrincipalsTableBody from "./PrincipalsTableBody";
import PrincipalsTableHeader from "./PrincipalsTableHeader";

export default function PrincipalsTable({
  dictionary,
  principals
}: {
  dictionary: Dictionary;
  principals: Principal[];
}): JSX.Element {
  return (
    <table>
      <PrincipalsTableHeader dictionary={dictionary} />
      <PrincipalsTableBody principals={principals} />
    </table>
  );
}
