export const handleAmountFormating = (amount, language) => {
  const de = language === 'de' && 'de-DE';
  const en = language === 'en' && 'en-GB';

  const formatter = new Intl.NumberFormat(de || en, {
    style: 'currency',
    currency: 'EUR'
  });

  return formatter.format(amount);
};
