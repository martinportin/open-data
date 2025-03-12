import renderNotFound from './utils/renderers/renderNotFound';

describe('not found', () => {
  test('should display an english header', () => {
    const { getEnglishHeader } = renderNotFound();
    expect(getEnglishHeader()).toBeInTheDocument();
  });

  test('should display a swedish header', () => {
    const { getSwedishHeader } = renderNotFound();
    expect(getSwedishHeader()).toBeInTheDocument();
  });

  test('should display an english link', () => {
    const { getEnglishLink } = renderNotFound();
    expect(getEnglishLink()).toBeInTheDocument();
  });

  test('should display a swedish linl', () => {
    const { getSwedishLink } = renderNotFound();
    expect(getSwedishLink()).toBeInTheDocument();
  });
});
