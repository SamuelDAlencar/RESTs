const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const service = require('../../api/service/user.service');
const model = require('../../api/model/user.model');

describe('2.1 - userService', () => {
  describe('getByEmail - Se o email recebido via parametro estiver com o formato correto:', () => {
    const email = 'email@email.com';
    const encryptedEmail = '4f64c9f81bb0d4ee969aaf7b4a5a6f40';

    before(() => {
      sinon.stub(model, 'getByEmail')
        .resolves({
          id: 1,
          username: 'userName',
          email: 'email@email.com',
          password: '*******',
        });
    });

    after(() => {
      model.getByEmail.restore();
    });

    it('Deve retornar um objeto contendo o id, email e nome de usuário', async () => {
      const response = await service.getByEmail(email);

      sinon.assert.calledWith(model.getByEmail, encryptedEmail);
      expect(response).to.have.keys(['id', 'email', 'username']);
      expect(response).to.be.eql({
        id: 1,
        username: 'userName',
        email: 'email@email.com',
      });
    });
  });

  describe('getByEmail - Se o email recebido via parametro estiver com o formato correto, mas não for encontrado nada no banco:', () => {
    const email = 'email@email.com';

    before(() => {
      sinon.stub(model, 'getByEmail')
        .resolves(undefined);
    });

    after(() => {
      model.getByEmail.restore();
    });

    it('Deve retornar um objeto contendo statusCode NOT FOUND (404) e a mensagem correta', async () => {
      try {
        await service.getByEmail(email);
      } catch (error) {
        expect(error).to.have.keys(['statusCode', 'message']);
        expect(error.statusCode).to.be.equal(404);
        expect(error.message).to.be.equal('Não encontramos um usuário com esse email, quer fazer um cadastro?');
      }
    });
  });

  describe('logIn - Se o email e senha recebidos via parametro estiverem com o formato correto:', () => {
    const email = 'email@email.com';
    const encryptedEmail = '4f64c9f81bb0d4ee969aaf7b4a5a6f40';
    const password = 'secret_pass';
    const encryptedPassword = 'baeed6d497bd4f4676306544a0e7faba';

    before(() => {
      sinon.stub(model, 'getByEmail')
        .resolves({
          id: 1,
          username: 'userName',
          email: 'email@email.com',
          password: encryptedPassword,
        });
    });

    after(() => {
      model.getByEmail.restore();
    });

    it('Deve retornar um objeto contendo o nome do usuário e seu token de acesso', async () => {
      const response = await service.logIn(email, password);

      sinon.assert.calledWith(model.getByEmail, encryptedEmail);
      expect(response).to.have.keys(['token', 'email', 'username']);
    });
  });

  describe('logIn - Se o email e senha recebidos via parametro estiverem com o formato correto, mas não for encontrado nada no banco:', () => {
    const email = 'email@email.com';
    const password = 'secret_pass';

    before(() => {
      sinon.stub(model, 'getByEmail')
        .resolves(undefined);
    });

    after(() => {
      model.getByEmail.restore();
    });

    it('Deve retornar um objeto contendo statusCode NOT FOUND (404) e a mensagem correta', async () => {
      try {
        await service.logIn(email, password);
      } catch (error) {
        expect(error).to.have.keys(['statusCode', 'message']);
        expect(error.statusCode).to.be.equal(404);
        expect(error.message).to.be.equal('Não encontramos um usuário com esse email, quer fazer um cadastro?');
      }
    });
  });

  describe('logIn - Se o email e senha recebidos via parametro estiverem com o formato correto, mas a senha não corresponder com a senha deste usuário no banco:', () => {
    const email = 'email@email.com';
    const encryptedEmail = '4f64c9f81bb0d4ee969aaf7b4a5a6f40';
    const password = 'wrong_pass';
    const encryptedPassword = 'baeed6d497bd4f4676306544a0e7faba';

    before(() => {
      sinon.stub(model, 'getByEmail')
        .resolves({
          id: 1,
          username: 'userName',
          email: 'email@email.com',
          password: encryptedPassword,
        });
    });

    after(() => {
      model.getByEmail.restore();
    });

    it('Deve retornar um objeto contendo statusCode NOT FOUND (404) e a mensagem correta', async () => {
      try {
        const response = await service.logIn(email, password);

        expect(response).to.not.have.keys(['token', 'username']);
        expect(response).to.have.keys(['statusCode', 'message']);
      } catch (error) {
        sinon.assert.calledWith(model.getByEmail, encryptedEmail);

        expect(error).to.have.keys(['statusCode', 'message']);
        expect(error.statusCode).to.be.equal(403);
        expect(error.message).to.be.equal('Senha incorreta');
      }
    });
  });
});

describe('register - Se o nome de usuáro, email e senha recebidos via parametro estiverem com o formato correto:', () => {
  const username = 'Nome de Usuário';
  const email = 'email@email.com';
  const encryptedEmail = '4f64c9f81bb0d4ee969aaf7b4a5a6f40';
  const password = 'secret_pass';
  const encryptedPassword = 'baeed6d497bd4f4676306544a0e7faba';

  before(() => {
    sinon.stub(model, 'getByEmail')
      .resolves(undefined);

    sinon.stub(model, 'register')
      .resolves({
        id: 1,
        username: 'userName',
        email: 'email@email.com',
        password: encryptedPassword,
      });
  });

  after(() => {
    model.getByEmail.restore();
    model.register.restore();
  });

  it('Deve retornar um objeto contendo o nome do usuário e seu token de acesso', async () => {
    const response = await service.register(username, email, password);

    sinon.assert.calledWith(model.getByEmail, encryptedEmail);
    expect(response).to.have.keys(['token', 'email', 'username']);
  });
});

describe('register - register - Se o nome de usuáro, email e senha recebidos via parametro estiverem com o formato correto, mas o email recebido já estiver cadastrado:', () => {
  const username = 'Nome de Usuário';
  const email = 'email@email.com';
  const password = 'secret_pass';
  const encryptedPassword = 'baeed6d497bd4f4676306544a0e7faba';

  before(() => {
    sinon.stub(model, 'getByEmail')
      .resolves({
        id: 1,
        username: 'userName',
        email: 'email@email.com',
        password: encryptedPassword,
      });

    sinon.stub(model, 'register')
      .resolves(undefined);
  });

  after(() => {
    model.getByEmail.restore();
    model.register.restore();
  });

  it('Deve retornar um objeto contendo statusCode CONFLICT (409) e a mensagem correta', async () => {
    try {
      await service.register(username, email, password);
    } catch (error) {
      expect(error).to.have.keys(['statusCode', 'message']);
      expect(error.statusCode).to.be.equal(409);
      expect(error.message).to.be.equal('Um usuário com este email já esta registrado');
    }
  });
});
