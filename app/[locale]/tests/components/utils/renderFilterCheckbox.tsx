import { render } from '@testing-library/react';
import FilterCheckbox from '../../../components/FilterCheckbox';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import initTranslations from '@/app/i18n';

export default async function renderFilterCheckbox(
  name: RegExp,
  id: string,
  checked: boolean,
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>
) {
  const locale = 'en';
  const i18Namespaces = ['home'];
  const { resources } = await initTranslations(locale, i18Namespaces);

  const labelName = 'labelName';

  const screen = render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18Namespaces}
      resources={resources}
    >
      <FilterCheckbox
        labelName={labelName}
        id={id}
        checked={checked}
        handleCheckboxChange={handleCheckboxChange}
      />
    </TranslationsProvider>
  );

  return {
    getCheckbox: () =>
      screen.getByRole('checkbox', { name }) as HTMLInputElement,
    getHandleCheckboxChange: () => handleCheckboxChange
  };
}
