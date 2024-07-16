import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../i18n';

export const LanguageDisplay = ({ style }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const en = language === 'en';

  return (
    <span style={style} onClick={async event => await changeLanguage(event)}>
      {en ? 'Deutsch' : 'English'}
    </span>
  );
};
