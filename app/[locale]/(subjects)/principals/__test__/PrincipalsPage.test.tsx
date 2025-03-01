import nock from 'nock';
import renderPrincipalsPage from './utils/renderers/renderPrincipals';
import { principalsExtract } from './utils/mocks';

describe('principals page', () => {
  beforeEach(() => {
    setUpNock();
  });

  afterEach(() => {
    clearNock();
  });

  test('should render a header', async () => {
    const { getHeader } = await renderPrincipalsPage();
    expect(getHeader()).toBeInTheDocument();
  });

  test('should display a paragraph with the datetime of extract', async () => {
    const { getDateTimeOfExtract } = await renderPrincipalsPage();
    expect(getDateTimeOfExtract()).toBeInTheDocument();
  });

  test('should display a table', async () => {
    const { getPrincipalsTable } = await renderPrincipalsPage();
    expect(getPrincipalsTable()).toBeInTheDocument();
  });

  function setUpNock() {
    nock.cleanAll();
    nock('https://api.skolverket.se')
      .get(/\/skolenhetsregistret\/v1\/huvudman/)
      .reply(200, JSON.stringify(principalsExtract));
  }

  function clearNock() {
    if (!nock.isDone()) {
      nock.cleanAll();
      throw new Error('Not all mocked endpoints received requests.');
    }
  }
});
