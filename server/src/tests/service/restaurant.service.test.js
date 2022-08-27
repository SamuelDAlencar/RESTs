const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const service = require('../../api/service/restaurant.service');
const model = require('../../api/model/restaurant.model');
const restaurantMock = require('../mocks/restaurant');

describe('2.2 - restaurantService', () => {
  describe('getAll - Se houver restaurantes no banco de dados:', () => {
    before(() => {
      sinon.stub(model, 'getAll')
        .resolves(restaurantMock.restaurants);
    });

    after(() => {
      model.getAll.restore();
    });

    it('Deve retornar um json contendo um array de restaurantes', async () => {
      const response = await service.getAll();

      expect(response).to.be.an('array');
      expect(response.length).to.be.greaterThan(0);
      expect(response[0]).to.have.keys(['id', 'name', 'address', 'phone']);
    });
  });

  describe('getAll - Se NÃO houver restaurantes no banco de dados:', () => {
    before(() => {
      sinon.stub(model, 'getAll')
        .resolves([]);
    });

    after(() => {
      model.getAll.restore();
    });

    it('Deve retornar um json contendo um array vazio', async () => {
      const response = await service.getAll();

      expect(response).to.be.an('array');
      expect(response.length).to.be.equal(0);
    });
  });

  describe('getByName - Quando receber um nome válido, de um restaurante existente no banco:', () => {
    const name = 'Um Restaurante';

    before(() => {
      sinon.stub(model, 'getByName')
        .resolves([restaurantMock.restaurant]);
    });

    after(() => {
      model.getByName.restore();
    });

    it('Deve retornar o restaurante que condiz com o nome buscado', async () => {
      const response = await service.getByName(name);

      sinon.assert.calledWith(model.getByName, name);
      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response[0]).to.have.keys(['id', 'name', 'address', 'phone']);
    });
  });

  describe('getByName - Quando receber um nome válido, que bate com o nome de mais de um restaurante no banco de dados:', () => {
    const name = 'Um';

    before(() => {
      sinon.stub(model, 'getByName')
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
      model.getByName.restore();
    });


    it('Deve retornar os restaurantes que condizem com o nome buscado', async () => {
      const response = await service.getByName(name);

      sinon.assert.calledWith(model.getByName, name);
      expect(response.length).to.be.greaterThan(1);
      expect(response[0]).to.have.keys(['id', 'name', 'address', 'phone']);
    });
  });

  describe('getById - Quando receber um id válido:', () => {
    const id = 1;

    before(() => {
      sinon.stub(model, 'getById')
        .resolves({
          id: 1,
          name: 'Um Bar',
          address: 'endereço, 1',
          phone: '+55 (55) 5555-5555',
        });
    });

    after(() => {
      model.getById.restore();
    });

    it('Deve retornar um json contendo o restaurante que corresponde ao id', async () => {
      const response = await service.getById(id);

      expect(response).to.be.an('object');
      expect(response).to.have.keys(['id', 'name', 'address', 'phone']);
      expect(response.id).to.be.equal(1);
    });
  });
});
