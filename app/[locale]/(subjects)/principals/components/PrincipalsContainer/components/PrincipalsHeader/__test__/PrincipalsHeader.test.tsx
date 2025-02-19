import renderPrincipalsHeader from './utils/renderers/renderPrincipalsHeader';
import {
  principalsHeaderPropsNoPrincipals,
  principalsHeaderPropsThreePrincipals,
  principalsHeaderPropsSevenPrincipals
} from './utils/mocks/props';

describe('principals header', () => {
  test('should render a header showing zero number of principals', async () => {
    const { getHeaderShowingNoPrincipals } = await renderPrincipalsHeader(
      principalsHeaderPropsNoPrincipals
    );
    expect(getHeaderShowingNoPrincipals()).toBeInTheDocument();
  });

  test('should render a header showing three number of principals', async () => {
    const { getHeaderShowingThreePrincipals } = await renderPrincipalsHeader(
      principalsHeaderPropsThreePrincipals
    );
    expect(getHeaderShowingThreePrincipals()).toBeInTheDocument();
  });

  test('should render a header showing seven number of principals', async () => {
    const { getHeaderShowingSevenPrincipals } = await renderPrincipalsHeader(
      principalsHeaderPropsSevenPrincipals
    );
    expect(getHeaderShowingSevenPrincipals()).toBeInTheDocument();
  });
});
