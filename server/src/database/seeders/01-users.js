module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        username: 'Frederico',
        email: 'fred@graodireto.com.br',
        password: '123Fred',
        // 123Fred
      },
      {
        username: 'Samuca',
        email: 'samuca@gmail.com',
        password: '1samu9',
        // 1samu9
      },
      {
        username: 'Gabriel',
        email: 'gabribo@yahoo.com',
        password: 'gabribas5839',
        // gabribas5839
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
