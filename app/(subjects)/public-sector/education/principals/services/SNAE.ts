export async function getPrincipals(): Promise<PrincipalsRecord> {
  const API_ADDR: string =
    "https://api.skolverket.se/skolenhetsregistret/v1/huvudman";
  const ONE_HOUR: number = 36000;

  try {
    const response = await fetch(API_ADDR, {
      next: {
        revalidate: ONE_HOUR
      }
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const principalsRecord: PrincipalsRecord = await response.json();
    return principalsRecord;
  } catch (reason) {
    //TODO: Improve error handling
    throw reason;
  }
}
