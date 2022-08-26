module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('items',
      [
        {
          restaurantId: 1,
          name: 'Macarrão à Bolonhesa',
          type: 'food',
          description: 'Macarrão delicioso feito com molho de tomate, carne moída e macarrão fino',
          price: 12.50,
        },
        {
          restaurantId: 1,
          name: 'Macarrão na chapa',
          type: 'food',
          description: 'Feito na hora com molho shoyu e legumes',
          price: 14,
        },
        {
          restaurantId: 1,
          name: 'Macarrão ao molho branco',
          type: 'food',
          description: 'Macarrão cremoso feito com molho branco e pedaços de bacon',
          price: 10.50,
        },
        {
          restaurantId: 1,
          name: 'Laranjada 1L',
          type: 'drink',
          description: 'Suco de laranja natural',
          price: 10,
        },
        {
          restaurantId: 1,
          name: 'Guarana 2L',
          type: 'drink',
          description: 'Garrafa pet Guarana 2 Litros',
          price: 8,
        },
        // ---------------------------------------------------------------
        {
          restaurantId: 2,
          name: 'Espetinho',
          type: 'food',
          description: 'Opções: Frango, coração, boi, medalhão, camarão (camarão possuí um acrescimo de R$1)',
          price: 8,
        },
        {
          restaurantId: 2,
          name: 'Porção com jiló',
          type: 'food',
          description: 'Opções da carne: Frango, coração, boi',
          price: 12,
        },
        {
          restaurantId: 2,
          name: 'Tropeiro com carne de churrasco',
          type: 'food',
          description: 'Porção completa de tropeiro e carne a sua escolha',
          price: 20,
        },
        {
          restaurantId: 2,
          name: 'Cerveja lata',
          type: 'drink',
          description: 'Lata de 350ml',
          price: 6,
        },
        {
          restaurantId: 2,
          name: 'Cerveja longneck',
          type: 'drink',
          description: 'Garrafa de 1L (Retornar a garrafa vazia)',
          price: 10,
        },
        // ---------------------------------------------------------------
        {
          restaurantId: 3,
          name: 'Panqueca de legumes',
          type: 'food',
          description: 'Panqueca completa',
          price: 10,
        },
        {
          restaurantId: 3,
          name: 'Strogonoff de palmito',
          type: 'food',
          description: 'Strogonoff ao molho branco',
          price: 12,
        },
        {
          restaurantId: 3,
          name: 'Arroz com lentilha e cebolas douradas',
          type: 'food',
          description: 'Arroz bem cozido com lentilhas e cebola',
          price: 15,
        },
        {
          restaurantId: 3,
          name: 'Jarra de suco natural 1L',
          type: 'drink',
          description: 'Sabores: limão, laranja, manga',
          price: 12.50,
        },
        {
          restaurantId: 3,
          name: 'Refrigerante lata',
          type: 'drink',
          description: 'Refrigerante 150ml',
          price: 6,
        },
        // ---------------------------------------------------------------
        {
          restaurantId: 4,
          name: 'Temaki',
          type: 'food',
          description: 'Temaki cru ou grelhado',
          price: 24,
        },
        {
          restaurantId: 4,
          name: 'Uramaki',
          type: 'food',
          description: '4 Reais a unidade',
          price: 4,
        },
        {
          restaurantId: 4,
          name: 'Barca',
          type: 'food',
          description: 'Opções variadas de unidades e porções',
          price: 150,
        },
        {
          restaurantId: 4,
          name: 'Refri lata',
          type: 'drink',
          description: 'Refrigerante 150ml',
          price: 8,
        },
        {
          restaurantId: 4,
          name: 'Refri garrafa',
          type: 'drink',
          description: 'Refrigerante 2L',
          price: 14,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  },
};
