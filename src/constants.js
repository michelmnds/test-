import usePhoneType from './hooks/usePhoneType';
import useUserLanguage from './hooks/useUserLanguage';

export const phoneType = usePhoneType();
export const userLang = useUserLanguage();
export const isAndroid = phoneType === 'android';
export const storeUrl = isAndroid
  ? `https://play.google.com/store/`
  : `https://apps.apple.com/${userLang}/app/fliz-pay/id6480379711`;
