import { render, screen } from '@testing-library/react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import App from './App';

beforeAll(() => {
  i18n.use(initReactI18next).init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          bio: 'Technical Support Engineer with experience resolving complex customer-facing technical issues and supporting REST API integrations.',
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
});

test('renders the CV heading', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  const heading = screen.getByRole('heading', { name: /MATIAS FERRERAS/i });
  expect(heading).toBeInTheDocument();
});

test('renders role, company and dates together in professional experience', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  expect(screen.getByText(/Support Engineer \| SmartBear \| Feb 2024 – Present/i)).toBeInTheDocument();
});
