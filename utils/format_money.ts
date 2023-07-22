// Utility function to format price as money
const format_money = (price: number) => {
  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Remove the ".00" part when there are no cents
  return formattedPrice.replace(/\.00$/, '');
};

export default format_money;
