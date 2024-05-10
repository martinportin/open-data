import PublicSectorNavigationBar from '@/app/[lang]/(subjects)/publicsector/components/PublicSectorNavigationBar';
import { render, screen } from '@testing-library/react';

test('should see the "Principals" link', async () => {
  const lang = 'en-GB';
  render(await PublicSectorNavigationBar({ params: { lang } }));
  const link = screen.getByRole('link', { name: /Principals/i });
  expect(link).toHaveProperty(
    'href',
    `http://localhost/${lang}/publicsector/principals`
  );
});

test('should see the "Huvudmän" link', async () => {
  const lang = 'sv-SE';
  render(await PublicSectorNavigationBar({ params: { lang } }));
  const link = screen.getByRole('link', { name: /Huvudmän/i });
  expect(link).toHaveProperty(
    'href',
    `http://localhost/${lang}/publicsector/principals`
  );
});
