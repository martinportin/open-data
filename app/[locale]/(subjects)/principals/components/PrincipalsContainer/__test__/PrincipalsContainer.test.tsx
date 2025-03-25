import renderPrincipalsContainer from './utils/renderers/renderPrincipalsContainer';
import { principalsContainerProps } from './utils/mocks/props';
import userEvent from '@testing-library/user-event';

describe('principals container', () => {
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

  test('should update the search input when typing', async () => {
    const { getSearchInput } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getSearchInput()).toHaveValue('');
    await userEvent.type(getSearchInput(), 'principal');
    expect(getSearchInput()).toHaveValue('principal');
  });

  test('should filter the principals on "Name" when typing', async () => {
    const { getTableRows, getSearchInput } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getTableRows()).toHaveLength(7);
    await userEvent.type(getSearchInput(), 'Principal 0');
    expect(getTableRows()).toHaveLength(1);
    await userEvent.clear(getSearchInput());
    expect(getTableRows()).toHaveLength(7);
  });

  test('should filter the principals on "Organization Number" when typing', async () => {
    const { getTableRows, getSearchInput } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getTableRows()).toHaveLength(7);
    await userEvent.type(getSearchInput(), '0000000003');
    expect(getTableRows()).toHaveLength(1);
    await userEvent.clear(getSearchInput());
    expect(getTableRows()).toHaveLength(7);
  });

  test('should display seven filter checkboxes', async () => {
    const { getFilterCheckboxes } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getFilterCheckboxes()).toHaveLength(7);
  });

  test('should check/uncheck the filter checkboxes on click', async () => {
    const { getFilterCheckboxes } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    for (const checkbox of getFilterCheckboxes()) {
      expect(checkbox).toBeChecked();
      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    }
  });

  test('should filter the principals table when unchecking/checking the filter checkboxes', async () => {
    const { getTableRows, getFilterCheckboxes } =
      await renderPrincipalsContainer({
        ...principalsContainerProps
      });
    expect(getTableRows()).toHaveLength(7);
    for (const checkbox of getFilterCheckboxes()) {
      await userEvent.click(checkbox);
      expect(getTableRows()).toHaveLength(6);
      await userEvent.click(checkbox);
      expect(getTableRows()).toHaveLength(7);
    }
  });

  test('should display no principals after unchecking all filter checkboxes', async () => {
    const { getTableRows, getFilterCheckboxes } =
      await renderPrincipalsContainer({
        ...principalsContainerProps
      });
    expect(getTableRows()).toHaveLength(7);
    for (const checkbox of getFilterCheckboxes()) {
      await userEvent.click(checkbox);
    }
    expect(getTableRows()).toHaveLength(0);
  });

  test('should display a principals table', async () => {
    const { getTable } = await renderPrincipalsContainer({
      ...principalsContainerProps
    });
    expect(getTable()).toBeInTheDocument();
  });
});
