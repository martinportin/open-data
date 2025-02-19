import { render, screen } from '@testing-library/react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import PrincipalsContainer from '../../../PrincipalsContainer';

export default async function renderPrincipalsContainer(
  principalsContainerProps: Readonly<PrincipalsContainerProps>
) {
  const locale = 'en';
  const i18nNamespaces = ['principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <PrincipalsContainer {...principalsContainerProps} />
    </TranslationsProvider>
  );

  return {
    getHeader: () => screen.getByRole('heading', { name: /numberOf \(7\)/i }),
    getDateTimeOfExtract: () =>
      screen.getByText(/yyyy-MM-dd hh:mm:ss/i, { selector: 'time' }),
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getFilterCheckbox: () => screen.getAllByRole('checkbox'),
    getTable: () => screen.getByRole('table')
  };
}
