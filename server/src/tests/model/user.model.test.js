const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const model = require('../../api/model/user.model');
const sequelizeModel = require('../../database/models').user;

describe('3.1 - userModel', () => {
  describe('getByEmail - Se o email recebido via parametro estiver com o formato correto, e um usuário com o email existir:', () => {
    const email = 'email@email.com';

    before(() => {
      sinon.stub(sequelizeModel, 'findOne')
        .resolves({
          id: 1,
          username: 'userName',
          email: 'email@email.com',
          password: '*******',
        });
    });

    after(() => {
      sequelizeModel.findOne.restore();
    });

    it('Deve retornar um objeto contendo o id, email e nome de usuário', async () => {
      const response = await model.getByEmail(email);

      expect(response).to.have.keys(['id', 'email', 'username', 'password']);
      expect(response).to.be.eql({
        id: 1,
        username: 'userName',
        email: 'email@email.com',
        password: '*******',
      });
    });
  });

  describe('register - Se os dados recebidos estiverem no formato correto, e nenhum usuário com este  email estiver no banco:', () => {
    const username = 'Nome de usu';
    const email = 'email@email.com';
    const password = '**********';

    before(() => {
      sinon.stub(sequelizeModel, 'create')
        .resolves({
          id: 1,
          username: username,
          email: email,
          password: password,
        });
    });

    after(() => {
      sequelizeModel.create.restore();
    });

    it('Deve retornar um objeto contendo o id, email e nome de usuário', async () => {
      const response = await model.register(username, email, password);

      expect(response).to.have.keys(['id', 'email', 'username', 'password']);
      expect(response).to.be.eql({
        id: 1,
        username: username,
        email: email,
        password: password,
      });
    });
  });
});
