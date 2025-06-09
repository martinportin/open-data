import { render } from '@testing-library/react';
import Filterbar from '../../components/Filterbar';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import translationProviderProps from './utils/props';

export default async function renderFilterbar() {
  const { locale, i18Namespaces, resources } = await translationProviderProps();
  const handleInputChangeMock = jest.fn();
  const checkboxValue = true;
  const handleCheckboxChangeMock = jest.fn();

  const screen = render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18Namespaces}
      resources={resources}
    >
      <Filterbar
        searchInputValue=""
        handleInputChange={handleInputChangeMock}
        isPublicCheckboxChecked={checkboxValue}
        isPrivateCheckboxChecked={checkboxValue}
        isMunicipalAssociationCheckboxChecked={checkboxValue}
        isisRegionCheckboxChecked={checkboxValue}
        isNationalAgencyForEducationCheckboxChecked={checkboxValue}
        isSamiCheckboxChecked={checkboxValue}
        isSpecialCheckboxChecked={checkboxValue}
        handleCheckboxChange={handleCheckboxChangeMock}
      />
    </TranslationsProvider>
  );

  return {
    getFilterbar: () => screen.getByRole('list'),
    getFilterbarItems: () => screen.getAllByRole('listitem'),
    getSearchInput: () => screen.getByRole('searchbox', { name: /search/i }),
    getCheckboxes: () => screen.getAllByRole('checkbox'),
    getCheckbox: (name: RegExp) => screen.getByRole('checkbox', { name })
  };
}
