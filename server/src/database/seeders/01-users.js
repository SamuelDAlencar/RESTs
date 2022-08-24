module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        username: 'Frederico',
        email: 'a96051938d83dc53bbfc07f7563150dc',
        password: 'adc8f4e59b36b4bfdea83974d52c211f',
        // fred@graodireto.com.br
        // 123Fred
      },
      {
        username: 'Samuca',
        email: '1bc47a3f3d096ec106c2143f625f630a',
        password: '39e8acfe3314b74a9fe237382f07475c',
        // samuca@gmail.com
        // 1samu9
      },
      {
        username: 'Gabriel',
        email: 'dffd9ce24211a7cdd3ac4e5ec021bdb0',
        password: 'e2b7e42901d95d3e55a58e1bb91251d7',
        // gabribo@yahoo.com
        // gabribas5839
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
