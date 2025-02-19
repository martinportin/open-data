interface Principal {
  PeOrgNr: string;
  Namn: string;
  Typ: string;
}

interface SearchInputProps {
  searchInputValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface FilterCheckboxProps {
  principalType: string;
  isChecked: boolean;
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface PrincipalToolbarProps {
  searchInputProps: SearchInputProps;
  filterCheckboxProps: FilterCheckboxProps[];
}

interface PrincipalTableHeaderProps {
  organizationNumber: string;
  name: string;
  type: string;
}

interface PrincipalsTableBodyProps {
  principals: Principal[];
}

interface PrincipalsTableProps {
  principals: Principal[];
}

interface PrincipalsHeaderProps {
  numberOfPrincipals: number;
}

interface PrincipalsContainerProps {
  principals: Principal[];
  dateTimeOfExtract: string;
  searchInputProps: SearchInputProps;
  filterCheckboxProps: FilterCheckboxProps[];
}
