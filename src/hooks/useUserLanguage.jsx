const useUserLanguage = () => {
  let userLang = navigator.language || navigator.languages[0];

  if (userLang !== 'de') {
    userLang = 'us';
  }

  return userLang;
};

export default useUserLanguage;
