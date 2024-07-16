const useUserLanguage = () => {
  let userLang = navigator.language || navigator.languages[0];

  if (userLang !== 'de') {
    userLang = 'en';
  }

  return userLang;
};

export default useUserLanguage;
