import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import useUserLanguage from './hooks/useUserLanguage';

const resources = {
  en: { translation: en },
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
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
};

export const changeLanguage = async event => {
  const de = event.target.innerHTML === 'Deutsch';
  const en = event.target.innerHTML === 'English';

  try {
    if (de) {
      localStorage.setItem('@language', 'de');
      await i18n.changeLanguage('de');
    } else if (en) {
      localStorage.setItem('@language', 'en');
      await i18n.changeLanguage('en');
    }
  } catch (error) {
    console.error('Failed to save the language setting', error);
  }
};
loadLocale();
