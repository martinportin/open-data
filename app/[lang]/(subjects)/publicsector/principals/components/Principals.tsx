import PrincipalsHeader from './PrincipalsHeader';
import PrincipalsToolbar from './PrincipalsToolbar';
import PrincipalsTable from './principalsTable';

export default function Principals({
  params,
}: Readonly<{ params: { dictionary: Dictionary; principals: Principals } }>) {
  const { dictionary, principals } = params;
  return (
    <>
      <PrincipalsHeader params={{ dictionary }} />
      <PrincipalsToolbar
        params={{ dictionary, principals: principals.Huvudman }}
      />
      <PrincipalsTable
        params={{ dictionary, principals: principals.Huvudman }}
      />
    </>
  );
}
