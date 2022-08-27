const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const sequelizeModel = require('../../database/models').item;
const model = require('../../api/model/item.model');
const itemMock = require('../mocks/item');

describe('3.3 - itemModel', () => {
  describe('getAll - Se houver items no banco de dados:', () => {
    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves(itemMock.items);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar um json contendo um array de itens', async () => {
      const response = await model.getAll();

      expect(response).to.be.an('array');
      expect(response.length).to.be.greaterThan(0);
      expect(response[0]).to.have.keys(['id', 'name', 'description', 'price', 'type', 'restaurantId']);
      expect(response[0].type).to.be.oneOf(['food', 'drink']);
    });
  });

  describe('getAll - Se NÃO houver itens no banco de dados:', () => {
    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves([]);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar um json contendo um array vazio', async () => {
      const response = await model.getAll();

      expect(response).to.be.an('array');
      expect(response.length).to.be.equal(0);
    });
  });

  describe('getByQuery - Quando receber um nome válido, de um restaurante existente no banco:', () => {
    const name = 'Um item';
    const description = 'Comida mais barata';

    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves([{
          id: 1,
          name: 'Um item',
          restaurantId: 1,
          description: 'Bebida cara',
          price: 20,
          type: 'drink',
        }]);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar o item que condiz com o nome buscado', async () => {
      const response = await model.getByQuery(name, description);

      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response[0]).to.have.keys(['id', 'name', 'description', 'price', 'type', 'restaurantId']);
      expect(response[0].type).to.be.oneOf(['food', 'drink']);
    });
  });

  describe('getByQuery - Quando receber uma descrição válida, de um item existente no banco:', () => {
    const name = 'Item';
    const description = 'Vegetariana';

    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves([{
          id: 1,
          name: 'Carne de soja',
          description: 'Comida vegetariana',
          restaurantId: 1,
          price: 15,
          type: 'food'
        }]);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar o item que condiz com a descrição buscada', async () => {
      const response = await model.getByQuery(name, description);

      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response[0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(response[0].type).to.be.oneOf(['food', 'drink']);
    });
  });

  describe('getByQuery - Quando receber um nome válido, que bate com o nome de mais de um item no banco de dados:', () => {
    const name = 'Hamburguer';
    const description = 'frango';

    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves([{
          id: 1,
          name: 'Hamburguer de frango',
          description: 'Descrição do item',
          restaurantId: 1,
          price: 15,
          type: 'food'
        }, {
          id: 4,
          name: 'Hamburguer de carne',
          description: 'Descrição do item',
          restaurantId: 1,
          price: 15,
          type: 'food'
        }]);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar os itens que condizem com o nome buscado', async () => {
      const response = await model.getByQuery(name, description);

      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response[0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(response[0].type).to.be.oneOf(['food', 'drink']);
    });
  });

  describe('getByQuery - Quando receber uma descrição válida, que bate com a descrição de mais de um item no banco de dados:', () => {
    const name = '';
    const description = 'barbecue';

    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves([{
          id: 1,
          name: 'Hamburguer de frango',
          description: 'Com molho de barbecue',
          restaurantId: 1,
          price: 15,
          type: 'food'
        }, {
          id: 4,
          name: 'Hamburguer de carne',
          description: 'Acompanha barbecue',
          restaurantId: 1,
          price: 15,
          type: 'food'
        }]);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar os itens que condizem com a descrição buscada', async () => {
      const response = await model.getByQuery(name, description);

      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response[0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(response[0].type).to.be.oneOf(['food', 'drink']);
    });
  });

  describe('getByRestaurant - Quando receber um id de restaurante válido:', () => {
    const id = 3;

    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves([{
          id: 1,
          name: 'Refri',
          description: 'Diversos sabores',
          restaurantId: 3,
          price: 15,
          type: 'drink'
        }, {
          id: 7,
          name: 'Taco',
          description: 'Apimentado',
          restaurantId: 3,
          price: 15,
          type: 'food'
        }]);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar um json contendo os itens que pertencem ao restaurante do id recebido', async () => {
      const response = await model.getByRestaurant(id);

      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response[0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(response[0].restaurantId).to.be.equal(3);
      expect(response[0].type).to.be.oneOf(['food', 'drink']);
    });
  });
});
