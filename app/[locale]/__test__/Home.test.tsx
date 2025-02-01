import { renderHome } from './utils/renderers/renderHome';

describe('home page', () => {
  test('should render a header with translation key "openData"', async () => {
    const { getHeader } = await renderHome();
    expect(getHeader()).toBeInTheDocument();
  });
});
