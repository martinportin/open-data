import Principals from '../utils/classes/Principals';
import { SWEDISH_NATIONAL_AGENCY_FOR_EDUCATION_API } from '../utils/constants/apis';

async function errorMessage(response: Response): Promise<string> {
  const responseText = await response.text();
  const errorMessage = JSON.parse(responseText).Message;
  return `{"status": "${response.status}", "message": "${errorMessage}"}`;
}

export default async function getPrincipals(): Promise<Principals | string> {
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
    return await errorMessage(response);
  }

  return new Principals(await response.json());
}
