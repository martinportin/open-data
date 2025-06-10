import renderEducationOrganizersHeader from './utils/renderEducationOrganizersHeader';

describe('education organizers header', () => {
  const numberOfEducationOrganizers = [0, 1, 2, 3, 5, 10, 100, 1000];

  test('should display a header', () => {
    const { getCounter } = renderEducationOrganizersHeader(0);
    expect(getCounter()).toBeInTheDocument();
  });

  test('t should have been called', () => {
    const { getTSpy } = renderEducationOrganizersHeader(0);
    expect(getTSpy()).toHaveBeenCalled();
  });

  for (const number of numberOfEducationOrganizers) {
    test(`t should have been called with the parameter "${number}"`, () => {
      const { getTSpy } = renderEducationOrganizersHeader(number);
      expect(getTSpy()).toHaveBeenCalledWith('numberOfEducationOrganizers', {
        numberOfEducationOrganizers: number
      });
    });
  }
});
