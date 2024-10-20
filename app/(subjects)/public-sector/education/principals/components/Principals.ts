export default class Principals {
  private _date: string;
  private _principals: Principal[];

  constructor(principalsRecord: PrincipalsRecord) {
    this._date = principalsRecord.Uttagsdatum;
    this._principals = principalsRecord.Huvudman;
  }

  get dateTimeOfExtract() {
    const dateTimeOfExtract = new Date(this._date);
    const hours = dateTimeOfExtract.getHours().toString().padStart(2, "0");
    const time = `${hours}:${dateTimeOfExtract.getUTCMinutes()}:${dateTimeOfExtract.getSeconds()}`;
    const month = (dateTimeOfExtract.getUTCMonth() + 1)
      .toString()
      .padStart(2, "0");
    const date = `${dateTimeOfExtract.getFullYear()}-${month}-${dateTimeOfExtract.getDate()}`;
    return `${time} ${date}`;
  }

  get principals() {
    return this._principals.slice();
  }
}
