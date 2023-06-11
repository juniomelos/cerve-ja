module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Administrator App',
          email: 'adm@cerveja.com',
          password: 'af80a2195d074528bf94211be0269448',
          role: 'administrator',
        },
        {
          id: 2,
          name: 'Seller App',
          email: 'seller@cerveja.com',
          password: '71b335b8d3390eb1da1d0b47b329d9e9',
          role: 'seller',
        },
        {
          id: 3,
          name: 'Customer App',
          email: 'customer@email.com',
          password: 'b609cbc553ed99169af62f3233630f35',
          role: 'customer',
        },
      ],
    );
  },

  down: async (QueryInterface) => {
    await QueryInterface.bulkDelete('users', null, {});
  },
}