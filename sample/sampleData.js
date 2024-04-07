const orders = {
  1: {
    amount: 1000,
    currency: "TWD",
    packages: [
      {
        id: "product-1",
        amount: 1000,
        products: [
          {
            name: "BENQ的螢幕",
            quantity: 1,
            price: 1000,
          },
        ],
      },
    ],
  },
  2: {
    amount: 7000,
    currency: "TWD",
    packages: [
      {
        id: "product-2",
        amount: 7000,
        products: [
          {
            name: "想買什麼就買什麼",
            quantity: 7,
            price: 1000,
          },
        ],
      },
    ],
  },
};

module.exports = orders;