import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import useUserLanguage from './hooks/useUserLanguage';

const resources = {
  us: { translation: en },
  de: { translation: de }
};

export const loadLocale = async () => {
  let userLang = localStorage.getItem('@language');
  if (!userLang) {
    userLang = useUserLanguage();
    localStorage.setItem('@language', userLang);
  }
  await i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: userLang,
    fallbackLng: 'us',
    interpolation: {
      escapeValue: false
    }
  });
};

export const changeLanguage = async event => {
  const de = event.target.innerHTML === 'German';
  const en = event.target.innerHTML === 'Englisch';

  try {
    if (de) {
      localStorage.setItem('@language', 'de');
      await i18n.changeLanguage('de');
    } else if (en) {
      localStorage.setItem('@language', 'us');
      await i18n.changeLanguage('us');
    }
  } catch (error) {
    console.error('Failed to save the language setting', error);
  }
};
loadLocale();
