import { SWEDISH_NATIONAL_AGENCY_FOR_EDUCATION_API } from "../constants/apis";

export async function getPrincipals(): Promise<PrincipalsRecord> {
  const ONE_HOUR: number = 36000;

  try {
    const response = await fetch(
      `${SWEDISH_NATIONAL_AGENCY_FOR_EDUCATION_API}/skolenhetsregistret/v1/huvudman`,
      {
        next: {
          revalidate: ONE_HOUR
        }
      }
    );
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
