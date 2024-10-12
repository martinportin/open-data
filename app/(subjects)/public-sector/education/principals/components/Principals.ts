export default class Principals {
  private _date: string;
  private _principals: Principal[];

  constructor(principalsRecord: PrincipalsRecord) {
    this._date = principalsRecord.Uttagsdatum;
    this._principals = principalsRecord.Huvudman;
  }

  get date() {
    return this._date;
  }

  set setDate(date: string) {
    this._date = date;
  }

  get principals() {
    return this._principals;
  }

  set setPrincipals(principals: Principal[]) {
    this._principals = principals;
  }

  numberOfPrincipals() {
    return this._principals.length;
  }
}
