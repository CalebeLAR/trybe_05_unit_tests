const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
    productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
let array = productDetails('firstProduct', 'secondProduct');

module.exports = productDetails;
