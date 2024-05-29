export default async function getPrincipals(): Promise<Principals> {
  const TWENTY_FOUR_HOURS = 86400;
  const response = await fetch(
    'https://api.skolverket.se/skolenhetsregistret/v1/huvudman',
    {
      next: { revalidate: TWENTY_FOUR_HOURS },
    }
  );
  const data = await response.json();
  return data;
}
