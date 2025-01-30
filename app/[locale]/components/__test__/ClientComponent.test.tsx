import { render, screen } from '@testing-library/react';
import ClientComponent from '../ClientComponent';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('client component', () => {
  test('should render a header with translation key "subheader"', () => {
    render(<ClientComponent />);
    screen.getByRole('heading', { level: 2, name: /subheader/i });
  });
});
