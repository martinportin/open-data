import renderPrincipalsContainer from './utils/renderers/renderPrincipalsContainer';
import { principalsContainerProps } from './utils/mocks/props';

describe('principals container', () => {
  test('should display a header with the number of principals', async () => {
    const { getHeader } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getHeader()).toBeInTheDocument();
  });

  test('should display the date and time of the extract', async () => {
    const { getDateTimeOfExtract } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getDateTimeOfExtract()).toBeInTheDocument();
  });

  test('should display a search input', async () => {
    const { getSearchInput } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('should display seven filter checkboxes', async () => {
    const { getFilterCheckbox } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getFilterCheckbox()).toHaveLength(7);
  });

  test('should display a principals table', async () => {
    const { getTable } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getTable()).toBeInTheDocument();
  });
});
