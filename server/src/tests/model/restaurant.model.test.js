const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const model = require('../../api/model/restaurant.model');
const sequelizeModel = require('../../database/models').restaurant;
const restaurantMock = require('../mocks/restaurant');

describe('3.2 - restaurantModel', () => {
  describe('getAll - Se houver restaurantes no banco de dados:', () => {
    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves(restaurantMock.restaurants);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar um json contendo um array de restaurantes', async () => {
      const response = await model.getAll();

      expect(response).to.be.an('array');
      expect(response.length).to.be.greaterThan(0);
      expect(response[0]).to.have.keys(['id', 'name', 'address', 'phone']);
    });
  });

  describe('getAll - Se NÃO houver restaurantes no banco de dados:', () => {
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

  describe('getByName - Quando receber um nome válido, de um restaurante existente no banco:', () => {
    const name = 'Um Restaurante';

    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
        .resolves([restaurantMock.restaurant]);
    });

    after(() => {
      sequelizeModel.findAll.restore();
    });

    it('Deve retornar o restaurante que condiz com o nome buscado', async () => {
      const response = await model.getByName(name);

      expect(response).to.be.an('array');
      expect(response[0]).to.be.an('object');
      expect(response[0]).to.have.keys(['id', 'name', 'address', 'phone']);
      expect(response[0].name).to.include(name);
    });
  });

  describe('getByName - Quando receber um nome válido, que bate com o nome de mais de um restaurante no banco de dados:', () => {
    const name = 'Um';

    before(() => {
      sinon.stub(sequelizeModel, 'findAll')
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
      sequelizeModel.findAll.restore();
    });


    it('Deve retornar os restaurantes que condizem com o nome buscado', async () => {
      const response = await model.getByName(name);

      expect(response.length).to.be.greaterThan(1);
      expect(response[0]).to.have.keys(['id', 'name', 'address', 'phone']);
      expect(response[0].name).to.include(name);
    });
  });

  describe('getById - Quando receber um id válido:', () => {
    const id = 1;

    before(() => {
      sinon.stub(sequelizeModel, 'findOne')
        .resolves({
          id: 1,
          name: 'Um Bar',
          address: 'endereço, 1',
          phone: '+55 (55) 5555-5555',
        });
    });

    after(() => {
      sequelizeModel.findOne.restore();
    });

    it('Deve retornar um json contendo o restaurante que corresponde ao id', async () => {
      const response = await model.getById(id);

      expect(response).to.be.an('object');
      expect(response).to.have.keys(['id', 'name', 'address', 'phone']);
      expect(response.id).to.be.equal(1);
    });
  });
});
