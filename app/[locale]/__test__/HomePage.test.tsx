import { renderHomePage } from './utils/renderers/renderHomePage';

describe('home page', () => {
  test('should render a header with translation key "openData"', async () => {
    const { getHeader } = await renderHomePage();
    expect(getHeader()).toBeInTheDocument();
  });
});
