import renderPrincipalsHeader from './utils/renderers/renderPrincipalsHeader';

describe('principals header', () => {
  test('should render a principals header', async () => {
    const { getHeader } = await renderPrincipalsHeader({ locale: 'en' });
    expect(getHeader()).toBeInTheDocument();
  });
});
