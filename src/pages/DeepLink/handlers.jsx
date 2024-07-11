export const handleDeepLink = (reference, setHasDownloaded) => {
  if (!reference) {
    // window.location.href = storeUrl;
  }

  window.addEventListener('blur', () => {
    setHasDownloaded(true);
  });
};
