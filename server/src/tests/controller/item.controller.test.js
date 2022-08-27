const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const service = require('../../api/service/item.service');
const controller = require('../../api/controller/item.controller');
const itemMock = require('../mocks/item');

describe('1.3 - itemController', () => {
  describe('getAll - Se houver itens no banco de dados:', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getAll')
        .resolves(itemMock.items);
    });

    after(() => {
      service.getAll.restore();
    });

    it('Deve retornar o status OK (200) e um json contendo um array de Itens', async () => {
      await controller.getAll(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0]).to.be.an('array');
      expect(res.json.args[0][0].length).to.be.greaterThan(0);
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(res.json.args[0][0][0].type).to.be.oneOf(['food', 'drink']);
    });
  });

  describe('getAll - Se NÃO houver itens no banco de dados:', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getAll')
        .resolves([]);
    });

    after(() => {
      service.getAll.restore();
    });

    it('Deve retornar o status OK (200) e um json contendo um array vazio', async () => {
      await controller.getAll(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0]).to.be.an('array');
      expect(res.json.args[0][0].length).to.be.equal(0);
    });
  });

  describe('getByQuery - Quando receber um nome válido, de um item existente no banco:', () => {
    const req = {
      query: {
        name: 'Um Item',
        description: 'Informações',
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByQuery')
        .resolves([itemMock.item]);
    });

    after(() => {
      service.getByQuery.restore();
    });

    it('Deve retornar o status OK (200) e o item que condiz com o nome buscado', async () => {
      await controller.getByQuery(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0][0]).to.be.an('object');
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(res.json.args[0][0][0].name).to.be.equal('Um Item');
    });
  });

  describe('getByQuery - Quando receber uma descrição válida, de um item existente no banco:', () => {
    const req = {
      query: {
        name: 'Um Item',
        description: 'Descrição do item',
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByQuery')
        .resolves([{
          id: 1,
          name: 'Comida',
          description: 'Descrição',
          restaurantId: 1,
          price: '15',
          type: 'food'
        }]);
    });

    after(() => {
      service.getByQuery.restore();
    });

    it('Deve retornar o status OK (200) e o item que condiz com a descrição buscada', async () => {
      await controller.getByQuery(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0][0]).to.be.an('object');
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(res.json.args[0][0][0].description).to.be.equal('Descrição');
    });
  });

  describe('getByQuery - Quando receber um nome válido, que bate com o nome de mais de um item no banco de dados:', () => {
    const req = {
      query: {
        name: 'Um',
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByQuery')
        .resolves([{
          id: 1,
          name: 'Um Item',
          description: 'Descrição do item',
          restaurantId: 1,
          price: '15',
          type: 'food'
        }, {
          id: 4,
          name: 'Uma bebida',
          description: 'Descrição do item',
          restaurantId: 1,
          price: '15',
          type: 'drink'
        }]);
    });

    after(() => {
      service.getByQuery.restore();
    });

    it('Deve retornar o status OK (200) e os itens que condizem com o nome buscado', async () => {
      await controller.getByQuery(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0].length).to.be.greaterThan(1);
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
    });
  });

  describe('getByQuery - Quando receber uma descrição válida, que bate com a descrição de mais de um item no banco de dados:', () => {
    const req = {
      query: {
        description: 'Bebida',
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByQuery')
        .resolves([{
          id: 1,
          name: 'Um Item',
          description: 'Descrição da bebida',
          restaurantId: 1,
          price: '15',
          type: 'food'
        }, {
          id: 4,
          name: 'Uma bebida',
          description: 'Descrição da bebida',
          restaurantId: 1,
          price: '15',
          type: 'drink'
        }]);
    });

    after(() => {
      service.getByQuery.restore();
    });

    it('Deve retornar o status OK (200) e os itens que condizem com a descrição buscada', async () => {
      await controller.getByQuery(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0].length).to.be.greaterThan(1);
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
    });
  });

  describe('getByRestaurant - Quando receber um id de restaurante válido:', () => {
    const req = {
      params: {
        id: 1,
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByRestaurant')
        .resolves([{
          id: 1,
          name: 'Sushi',
          description: 'Descrição do sushi',
          restaurantId: 1,
          price: '15',
          type: 'food'
        }, {
          id: 4,
          name: 'Arroz',
          description: 'Descrição do arroz',
          restaurantId: 1,
          price: '15',
          type: 'food'
        }]);
    });

    after(() => {
      service.getByRestaurant.restore();
    });

    it('Deve retornar o status OK (200) e um json contendo os itens que pertencem ao restaurante do id recebido', async () => {
      await controller.getByRestaurant(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0]).to.be.an('array');
      expect(res.json.args[0][0][0]).to.be.an('object');
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'description', 'restaurantId', 'price', 'type']);
      expect(res.json.args[0][0][0].restaurantId).to.be.equal(1);
    });
  });
});
