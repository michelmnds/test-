export const handleDeepLink = (reference, storeUrl) => {
  if (reference) {
    const redirectTimeout = window.setTimeout(() => {
      window.location.href = storeUrl;
    }, 2000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearTimeout(redirectTimeout);
        cleanupListeners();
      }
    };

    const handleBlur = () => {
      clearTimeout(redirectTimeout);
      cleanupListeners();
    };

    const cleanupListeners = () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange, false);
      window.removeEventListener('blur', handleBlur, false);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange, false);
    window.addEventListener('blur', handleBlur, false);
  } else {
    window.location.href = storeUrl;
  }
};
