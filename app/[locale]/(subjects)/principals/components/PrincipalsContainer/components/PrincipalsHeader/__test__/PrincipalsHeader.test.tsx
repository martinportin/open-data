import renderPrincipalsHeader from './utils/renderers/renderPrincipalsHeader';
import { principalsHeaderPropsNoPrincipals } from './utils/mocks/props';

describe('principals header', () => {
  test('should render a header', async () => {
    const { getHeaderShowingNoPrincipals } = await renderPrincipalsHeader(
      principalsHeaderPropsNoPrincipals
    );
    expect(getHeaderShowingNoPrincipals()).toBeInTheDocument();
  });
});
