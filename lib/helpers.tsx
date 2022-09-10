export const putSKUsStringInSKUArray = (
  skuString: string,
  skuArray: String[]
) => {
  let skusSplit = skuString.split(' ');
  skusSplit.forEach((sku: string) => {
    skuArray.push(sku);
  });
};
