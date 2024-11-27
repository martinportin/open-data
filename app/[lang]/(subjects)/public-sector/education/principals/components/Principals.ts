export default class Principals {
  private _date: string;
  private _principals: Principal[];

  constructor(principalsRecord: PrincipalsRecord) {
    this._date = principalsRecord.Uttagsdatum;
    this._principals = principalsRecord.Huvudman;
  }

  get swedishDateTimeOfExtract() {
    return this.formattedDateTime(this._date, "sv");
  }

  get englishDateTimeOfExtract() {
    return this.formattedDateTime(this._date, "en");
  }

  formattedDateTime(date: string, locale: string): string {
    const dateTimeOfExtract = new Date(date);
    const formattedDate = new Intl.DateTimeFormat(locale, {
      dateStyle: "full",
      timeStyle: "medium"
    }).format(dateTimeOfExtract);
    return `${formattedDate[0].toUpperCase()}${formattedDate.slice(1)}`;
  }

  get principals() {
    return this._principals.slice();
  }
}
