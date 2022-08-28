const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const service = require('../../api/service/user.service');
const controller = require('../../api/controller/user.controller');

describe('1.1 - userController', () => {
  describe('getByEmail - Se o email recebido via parametro estiver com o formato correto:', () => {
    const req = {
      params: {
        email: 'email@email.com',
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'getByEmail')
        .resolves({
          id: 1,
          email: 'email@email.com',
          username: 'userName'
        });
    });

    after(() => {
      service.getByEmail.restore();
    });

    it('Deve retornar o status OK (200) e um json contendo o id, seu email e nome de usuário', async () => {
      await controller.getByEmail(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0]).to.have.keys(['id', 'email', 'username']);
    });
  });

  describe('logIn - Se todos os campos recebidos estiverem corretos:', () => {
    const req = {
      body: {
        email: 'email@email.com',
        password: 'password'
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'logIn')
        .resolves({
          token: 'this.is.token',
          email: 'email@email.com',
          username: 'userName'
        });
    });

    after(() => {
      service.logIn.restore();
    });

    it('Deve retornar o status OK (200) e um json contendo o nome do usuário e seu token de acesso', async () => {
      await controller.logIn(req, res);

      expect(res.status.args[0][0]).to.be.equal(200);
      expect(res.json.args[0][0]).to.have.keys(['token', 'email', 'username']);
    });
  });

  describe('register - Se todos os campos recebidos estiverem corretos:', () => {
    const req = {
      body: {
        username: 'NovoUsuário',
        email: 'email@email.com',
        password: 'password'
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      sinon.stub(service, 'register')
        .resolves({
          token: 'this.is.token',
          email: 'email@email.com',
          username: 'userName'
        });
    });

    after(() => {
      service.register.restore();
    });

    it('Deve retornar o status CREATED (201) e um json contendo o nome do usuário e seu token de acesso', async () => {
      await controller.register(req, res);

      expect(res.status.args[0][0]).to.be.equal(201);
      expect(res.json.args[0][0]).to.have.keys(['token', 'email', 'username']);
    });
  });
});
