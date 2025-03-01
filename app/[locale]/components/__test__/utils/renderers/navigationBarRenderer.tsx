import { render, screen } from '@testing-library/react';
import NavigationBar from '../../../NavigationBar';

export default async function renderNavigationBar() {
  const navigationBar = await NavigationBar({ locale: 'en' });
  render(navigationBar);

  return {
    getNavigationBar: () => screen.getByRole('navigation'),
    getLinkList: () => screen.getByRole('list'),
    getHomeLink: () => screen.getByRole('link', { name: /home/i }),
    getPrincipalsLink: () => screen.getByRole('link', { name: /principals/i })
  };
}
