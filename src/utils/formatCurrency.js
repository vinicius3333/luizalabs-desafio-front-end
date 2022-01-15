const lang = "pt-BR";

export const formatCurrency = ({ price, currencyId }) => {
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency: currencyId,
  }).format(price);
};
