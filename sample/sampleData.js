const orders = {
  1: {
    amount: 1000,
    currency: "TWD",
    packages: [
      {
        id: "product-1",
        amount: 500,
        products: [
          {
            name: "蘋果",
            quantity: 2,
            price: 200,
          },
        ],
      },
    ],
  },
  2: {
    amount: 1000,
    currency: "TWD",
    packages: [
      {
        id: "product-2",
        amount: 500,
        products: [
          {
            name: "橘子",
            quantity: 7,
            price: 30,
          },
        ],
      },
    ],
  },
};

module.exports = orders;