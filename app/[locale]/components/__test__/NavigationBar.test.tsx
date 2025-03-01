import renderNavigationBar from './utils/renderers/navigationBarRenderer';

describe('navigation bar', () => {
  test('should display a navigation bar', async () => {
    const { getNavigationBar } = await renderNavigationBar();
    expect(getNavigationBar()).toBeInTheDocument();
  });

  test('should display a home link', async () => {
    const { getHomeLink } = await renderNavigationBar();
    expect(getHomeLink()).toBeInTheDocument();
  });

  test('home link should link to the home page', async () => {
    const { getHomeLink } = await renderNavigationBar();
    expect(getHomeLink()).toHaveAttribute('href', '/en');
  });

  test('should display a principals link', async () => {
    const { getPrincipalsLink } = await renderNavigationBar();
    expect(getPrincipalsLink()).toBeInTheDocument();
  });

  test('principals link should link to the principals page', async () => {
    const { getPrincipalsLink } = await renderNavigationBar();
    expect(getPrincipalsLink()).toHaveAttribute('href', '/en/principals');
  });
});
