import { render } from '@testing-library/react';
import EducationOrganizersHeader from '../../../components/EducationOrganizersCounter';

const tSpy = jest.fn((tKey: string): string => tKey);
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: tSpy })
}));

export default function renderEducationOrganizersCounter(
  numberOfEducationOrganizers: number
) {
  const screen = render(
    <EducationOrganizersHeader
      numberOfEducationOrganizers={numberOfEducationOrganizers}
    />
  );

  return {
    getCounter: () => screen.getByText(/numberOfEducationOrganizers/i),
    getTSpy: () => tSpy
  };
}
