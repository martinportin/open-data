import { render, screen } from '@testing-library/react';
import MainNavigationBar from '@/app/[lang]/components/MainNavigationBar';

test('should see the "Home Page" link', async () => {
  const lang = 'en-GB';
  render(await MainNavigationBar({ params: { lang } }));
  const link = screen.getByRole('link', { name: /Home Page/i });
  expect(link).toHaveProperty('href', `http://localhost/${lang}`);
});

test('should see the "Hem" link', async () => {
  const lang = 'sv-SE';
  render(await MainNavigationBar({ params: { lang } }));
  const link = screen.getByRole('link', { name: /Hem/i });
  expect(link).toHaveProperty('href', `http://localhost/${lang}`);
});

test('should see the "Public Sector" link', async () => {
  const lang = 'en-GB';
  render(await MainNavigationBar({ params: { lang } }));
  const link = screen.getByRole('link', { name: /Public Sector/i });
  expect(link).toHaveProperty('href', `http://localhost/${lang}/publicsector`);
});

test('should see the "Offentlig sektor" link', async () => {
  const lang = 'sv-SE';
  render(await MainNavigationBar({ params: { lang } }));
  const link = screen.getByRole('link', { name: /Offentlig sektor/i });
  expect(link).toHaveProperty('href', `http://localhost/${lang}/publicsector`);
});
