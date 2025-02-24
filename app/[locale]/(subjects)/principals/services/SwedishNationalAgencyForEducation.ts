import Principals from '../utils/classes/Principals';
import { SWEDISH_NATIONAL_AGENCY_FOR_EDUCATION_API } from '../utils/constants/apis';

function test() {}

export default async function getPrincipals(): Promise<Principals> {
  const ONE_HOUR: number = 36000;
  const response = await fetch(
    `${SWEDISH_NATIONAL_AGENCY_FOR_EDUCATION_API}/skolenhetsregistret/v1/huvudman`,
    {
      cache: 'force-cache',
      next: {
        revalidate: ONE_HOUR
      }
    }
  );
  if (!response.ok) {
    const responseText = await response.text();
    const errorMessage = JSON.parse(responseText).Message;
    throw new Error(
      `{"status": "${response.status}", "message": "${errorMessage}"}`
    );
  }

  return new Principals(await response.json());
}
