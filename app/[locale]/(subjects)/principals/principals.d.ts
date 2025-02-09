interface Principal {
  PeOrgNr: string;
  Namn: string;
  Typ: string;
}

interface FilterCheckboxProp {
  principalType: string;
  isChecked: boolean;
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}
