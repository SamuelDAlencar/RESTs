module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('restaurants',
      [
        {
          name: 'ToCo Fome',
          address: 'Rua AliEmbaixo, 11',
          phone: '+55 (31) 91111-1111',
        },
        {
          name: 'Self Sirva-se',
          address: 'Rua AquiEmCima, 99',
          phone: '+55 (37) 98797-7878',
        },
        {
          name: 'Vegetariemos',
          address: 'Rua Bellory Hills, 38',
          phone: '+55 (31) 3616-1919',
        },
        {
          name: '500%',
          address: 'Rua EmUberaba, 74',
          phone: '+55 (34) 5555-5555',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('restaurants', null, {});
  },
};
