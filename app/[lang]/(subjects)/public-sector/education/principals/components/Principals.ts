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
    const minutes = dateTimeOfExtract
      .getUTCMinutes()
      .toString()
      .padStart(2, "0");
    const seconds = dateTimeOfExtract.getSeconds().toString().padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;
    const month = (dateTimeOfExtract.getUTCMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = dateTimeOfExtract.getDate().toString().padStart(2, "0");
    const date = `${dateTimeOfExtract.getFullYear()}-${month}-${day}`;
    return `${time} ${date}`;
  }

  get principals() {
    return this._principals.slice();
  }
}
