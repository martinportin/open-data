export default function PrincipalsHeader({
  numberOf,
  principals,
  numberOfPrincipals
}: Readonly<PrincipalsHeaderProps>) {
  return <h1>{`${numberOf} ${principals} (${numberOfPrincipals})`}</h1>;
}
