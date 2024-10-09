export default function PrincipalsTableCounter({
  dictionary,
  principals
}: {
  dictionary: Dictionary;
  principals: Principal[];
}): JSX.Element {
  return (
    <h1>
      {dictionary.numberOf} ({principals.length})
    </h1>
  );
}
