import renderErrorMessage from './utils/renderers/renderErrorMessage';

describe('error message', () => {
  test('should display a header', async () => {
    const { getHeader } = await renderErrorMessage();
    expect(getHeader()).toBeInTheDocument();
  });

  test('should display error status code and message', async () => {
    const { getErrorInformation } = await renderErrorMessage();
    expect(getErrorInformation()).toBeInTheDocument();
  });
});
