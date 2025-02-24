export default class Principals {
  private _date: string;
  private _principals: Principal[];

  constructor(principalsExtract: PrincipalsExtract) {
    this._date = principalsExtract.Uttagsdatum;
    this._principals = principalsExtract.Huvudman;
  }

  get principals(): Principal[] {
    return this._principals.slice();
  }

  get swedishDateTimeOfExtract(): string {
    return this.formattedDateTime(this._date, 'sv');
  }

  get englishDateTimeOfExtract(): string {
    return this.formattedDateTime(this._date, 'en');
  }

  private formattedDateTime(date: string, locale: string): string {
    const formattedDate = new Intl.DateTimeFormat(locale, {
      dateStyle: 'full',
      timeStyle: 'medium'
    }).format(new Date(date));
    return `${formattedDate[0].toUpperCase()}${formattedDate.slice(1)}`;
  }
}
