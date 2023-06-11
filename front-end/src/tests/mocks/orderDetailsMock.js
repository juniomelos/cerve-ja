const orderDetailsMock = (saleStatus) => ({
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '8.80',
  deliveryAddress: 'Rua Teste 89',
  deliveryNumber: '39',
  saleDate: '2022-12-01T01:32:00.000Z',
  status: saleStatus,
  user: {
    name: 'User Teste',
  },
  seller: {
    name: 'Seller Teste',
  },
  products: [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: '2.20',
      SaleProduct: {
        quantity: 4,
      },
    },
  ],
});

export default orderDetailsMock;
