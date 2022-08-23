module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        username: 'Frederico',
        email: 'fred@graodireto.com.br',
        password: 'adc8f4e59b36b4bfdea83974d52c211f',
        // 123Fred
      },
      {
        username: 'Samuca',
        email: 'samuca@gmail.com',
        password: '39e8acfe3314b74a9fe237382f07475c',
        // 1samu9
      },
      {
        username: 'Gabriel',
        email: 'gabribo@yahoo.com',
        password: 'e2b7e42901d95d3e55a58e1bb91251d7',
        // gabribas5839
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
