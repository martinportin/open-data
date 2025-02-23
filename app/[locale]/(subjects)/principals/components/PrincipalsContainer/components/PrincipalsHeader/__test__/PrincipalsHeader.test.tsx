import renderPrincipalsHeader from './utils/renderers/renderPrincipalsHeader';
import {
  principalsHeaderPropsNoPrincipals,
  principalsHeaderPropsSevenPrincipals
} from './utils/mocks/props';

describe('principals header', () => {
  test('should render a header', async () => {
    const { getHeaderShowingNoPrincipals } = await renderPrincipalsHeader(
      principalsHeaderPropsNoPrincipals
    );
    expect(getHeaderShowingNoPrincipals()).toBeInTheDocument();
  });

  test('the t function should have been called once', async () => {
    const { getTSpy } = await renderPrincipalsHeader(
      principalsHeaderPropsNoPrincipals
    );
    expect(getTSpy()).toHaveBeenCalled();
  });

  test('the t function should have been called with "0"', async () => {
    const { getTSpy } = await renderPrincipalsHeader(
      principalsHeaderPropsNoPrincipals
    );
    expect(getTSpy()).toHaveBeenLastCalledWith(
      'principals:numberOfPrincipals',
      { numberOfPrincipals: 0 }
    );
  });

  test('the t function should have been called with "7"', async () => {
    const { getTSpy } = await renderPrincipalsHeader(
      principalsHeaderPropsSevenPrincipals
    );
    expect(getTSpy()).toHaveBeenLastCalledWith(
      'principals:numberOfPrincipals',
      { numberOfPrincipals: 7 }
    );
  });
});
