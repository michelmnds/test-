export const handleDeepLink = (reference, storeUrl, redirect = false) => {
  const appScheme = reference ? `flizpay://payment?reference=${reference}` : storeUrl;

  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = appScheme;
  document.body.appendChild(iframe);

  window.setTimeout(() => {
    window.location.href = storeUrl;
  }, 500);

  window.setTimeout(() => {
    document.body.removeChild(iframe);
  }, 1000);
};
