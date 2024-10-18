import PrincipalsPageContent from "./components/PrincipalsPageContent";
import { getPrincipals } from "./services/SNAE";

export default async function PrincipalsPage() {
  const principalsRecord: PrincipalsRecord = await getPrincipals();
  return <PrincipalsPageContent principalsRecord={principalsRecord} />;
}
