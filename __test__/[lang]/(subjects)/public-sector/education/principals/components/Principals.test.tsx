import Principals from "@/app/[lang]/(subjects)/public-sector/education/principals/components/Principals";
import { principalsList } from "./testUtils/mockData";

describe("princpals", () => {
  const principalsRecord: PrincipalsRecord = {
    Uttagsdatum: "2024-10-13T15:00:03.9733659+02:00",
    Fotnot: "Uppgifterna är hämtade från SCB:s allmänna företagsregister",
    Huvudman: principalsList
  };

  it("should return a list of principals", () => {
    const principals = new Principals(principalsRecord);
    expect(principals.principals).toEqual(principalsList);
  });

  it("should return a correctly formatted date", () => {
    const principals = new Principals(principalsRecord);
    expect(principals.swedishDateTimeOfExtract).toEqual(
      "Söndag 13 oktober 2024 kl. 13:00:03"
    );

    expect(principals.englishDateTimeOfExtract).toEqual(
      "Sunday, October 13, 2024 at 1:00:03 PM"
    );
  });
});
