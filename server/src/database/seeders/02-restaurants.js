module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('restaurants',
      [
        {
          name: 'ToCo Fome',
          address: 'Rua Ali Embaixo, 11',
          phone: '+55 (31) 91111-1111',
        },
        {
          name: 'Self Sirva-se',
          address: 'Rua Aqui Em Cima, 99',
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
        {
          name: 'Só Picante',
          address: 'Rua Mais Proxima, 41',
          phone: '+55 (31) 92151-1211',
        },
        {
          name: 'Tudo na brasa',
          address: 'Rua Quente, 9',
          phone: '+55 (37) 94197-7822',
        },
        {
          name: 'SintoFome',
          address: 'Rua Esfomeada, 19',
          phone: '+55 (31) 5516-1119',
        },
        {
          name: 'Alo Delivery',
          address: 'Rua Alo, 72',
          phone: '+55 (34) 5225-2255',
        },
        {
          name: 'Verdin',
          address: 'Rua Green, 11',
          phone: '+55 (34) 4215-1255',
        },
        {
          name: 'ConcordoBar',
          address: 'Rua Sim, 2',
          phone: '+55 (34) 5225-2255',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('restaurants', null, {});
  },
};
