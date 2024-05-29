import { render, screen } from '@testing-library/react';
import PrincipalsHeader from '@/app/[lang]/(subjects)/publicsector/principals/components/PrincipalsHeader';

describe('principals header', () => {
  it('should read "Principals"', () => {
    const dictionary: Dictionary = { principals: { principals: 'Principals' } };
    render(<PrincipalsHeader params={{ dictionary }} />);
    const header = screen.getByRole('heading', { name: /Principals/i });
    expect(header).toBeInTheDocument();
  });

  it('should read "Huvudmän"', () => {
    const dictionary: Dictionary = { principals: { principals: 'Huvudmän' } };
    render(<PrincipalsHeader params={{ dictionary }} />);
    const header = screen.getByRole('heading', { name: /Huvudmän/i });
    expect(header).toBeInTheDocument();
  });
});
