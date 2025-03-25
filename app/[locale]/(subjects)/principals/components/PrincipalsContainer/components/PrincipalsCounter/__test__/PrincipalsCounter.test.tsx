import renderPrincipalsCounter from './utils/renderers/renderPrincipalsCounter';

describe('principals counter', () => {
  test('should display principals counter', () => {
    const { getPrincipalsCounter } = renderPrincipalsCounter({
      numberOfPrincipals: 0
    });
    expect(getPrincipalsCounter()).toBeInTheDocument();
  });

  test('t should be called', () => {
    const { getTSpy } = renderPrincipalsCounter({
      numberOfPrincipals: 0
    });
    expect(getTSpy()).toHaveBeenCalled();
  });

  test('t should have been called with key and number of principals', () => {
    const { getTSpy } = renderPrincipalsCounter({
      numberOfPrincipals: 0
    });
    expect(getTSpy()).toHaveBeenCalledWith('principals:numberOfPrincipals', {
      numberOfPrincipals: 0
    });
  });
});
