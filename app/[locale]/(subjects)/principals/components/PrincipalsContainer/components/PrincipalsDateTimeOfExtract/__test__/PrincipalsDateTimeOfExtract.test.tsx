import renderPrincipalsDateTimeOfExtract from './utils/renderers/renderPrincipalsDateTimeOfExtract';

describe('principals date time och extraxt', () => {
  test('should render the date and time of extract', () => {
    const { getDateTimeOfExtract } = renderPrincipalsDateTimeOfExtract();
    expect(getDateTimeOfExtract()).toBeInTheDocument();
  });
});
