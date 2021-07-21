export const formatPrice = (currency: string) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency,
  });
};
