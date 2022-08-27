const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const service = require('../../api/service/restaurant.service');
const controller = require('../../api/controller/restaurant.controller');
const restaurantMock = require('../mocks/restaurant');

describe('1.2 - restaurantController', () => {
  describe('getAll - Se houver restaurantes no banco de dados:', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getAll')
        .resolves(restaurantMock.restaurants);
    });

    after(() => {
      service.getAll.restore();
    });

    it('Deve retornar o status OK (200) e um json contendo um array de restaurantes', async () => {
      await controller.getAll(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0]).to.be.an('array');
      expect(res.json.args[0][0].length).to.be.greaterThan(0);
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'address', 'phone']);
    });
  });

  describe('getAll - Se NÃO houver restaurantes no banco de dados:', () => {
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

  describe('getByName - Quando receber um nome válido, de um restaurante existente no banco:', () => {
    const req = {
      query: {
        name: 'Um Restaurante',
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByName')
        .resolves([restaurantMock.restaurant]);
    });

    after(() => {
      service.getByName.restore();
    });

    it('Deve retornar o status OK (200) e o restaurante que condiz com o nome buscado', async () => {
      await controller.getByName(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0][0]).to.be.an('object');
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'address', 'phone']);
    });
  });

  describe('getByName - Quando receber um nome válido, que bate com o nome de mais de um restaurante no banco de dados:', () => {
    const req = {
      query: {
        name: 'Um',
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByName')
        .resolves([{
          id: 1,
          name: 'Um Restaurante',
          address: 'endereço, 1',
          phone: '+55 (55) 5555-5555',
        }, {
          id: 4,
          name: 'Um Bar',
          address: 'endereço, 1',
          phone: '+55 (55) 5555-5555',
        }]);
    });

    after(() => {
      service.getByName.restore();
    });

    it('Deve retornar o status OK (200) e os restaurantes que condizem com o nome buscado', async () => {
      await controller.getByName(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0].length).to.be.greaterThan(1);
      expect(res.json.args[0][0][0]).to.have.keys(['id', 'name', 'address', 'phone']);
    });
  });

  describe('getById - Quando receber um id válido:', () => {
    const req = {
      params: {
        id: 1,
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getById')
        .resolves(restaurantMock.restaurant);
    });

    after(() => {
      service.getById.restore();
    });

    it('Deve retornar o status OK (200) e um json contendo o restaurante que corresponde ao id', async () => {
      await controller.getById(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0]).to.be.an('object');
      expect(res.json.args[0][0]).to.have.keys(['id', 'name', 'address', 'phone']);
      expect(res.json.args[0][0].id).to.be.equal(1);
    });
  });
});
