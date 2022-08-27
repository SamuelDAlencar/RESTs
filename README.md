# 🍲 Spot

O Spot é um projeto fullstack que consiste em um MVP de uma aplicação do ramo gastronômico, que após logado (email e senha criptografados), traz para o usuário uma lista de restaurantes e suas respectivas informações, como endereço, número de telefone, e seus cardápios, contendo detalhes de cada item do menu como descrição e preço

## 🧰 Tecnologias e ferramentas utilizadas

- [Javascript](https://www.javascript.com/) - Linguagem de programação utilizada
- [React](https://reactjs.org/) - Biblioteca front-end para componentização
- [React Router](https://reactrouter.com/en/main) - Biblioteca React para gerenciamento de rotas
- [ContextAPI](https://reactjs.org/docs/context.html) - Recurso React para gerenciamento de estado
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca React de ícones
- [Styled Components](https://styled-components.com/) - Biblioteca React para estilização de componentes
- [Node.js](https://nodejs.org/en/) - Campo de execução JS para back-end
- [Express.js](https://expressjs.com/) - Framework Node.js
- [Sequelize](https://sequelize.org/) - ORM para requisições ao banco relacional MySQL
- [MySQL](https://www.mysql.com/) - Banco de dados relacional utilizado
- [Docker](https://www.docker.com/) - Serviço de containerização
- [Axios](https://axios-http.com/docs/intro) - Biblioteca front-end para requisições a API
- [Concurrently](https://www.npmjs.com/package/concurrently) - Pacote utilizado para startar o front e back simultaneamente
- [Jsonwebtoken](https://jwt.io/) - Biblioteca utilizada para gerar token de validação do usuário
- [md5](https://www.md5hashgenerator.com/) - Biblioteca que gera hash a partir de um payload
- [joi](https://www.npmjs.com/package/joi) - Utilizada para validar campos de login
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors) - Captura erros assíncronos gerados no express
- [dotenv](https://www.npmjs.com/package/dotenv) - Alocar variáveis de ambiente
- [mocha](https://mochajs.org/) - Framework de testes Node.js
- [chai](https://www.chaijs.com/) - Biblioteca de assertions Node.js
- [sinon](https://sinonjs.org/) - Biblioteca de stubs e mocks para Javascript

## ✅ Status

*Front-end:*
  - [x] Página de login responsiva e campos de email e senha
  - [x] Página de registro responsiva com campos de email, senha e usuário
  - [x] Rotas de usuário e de restaurantes criadas
  - [x] Página "home" responsiva listando todos os restaurantes disponíveis no banco
  - [x] Estilização dos restaurantes da home
  - [x] Opção de filtro dos restaurantes atráves do campo de busca (que busque pelo nome do restaurante, nome ou descrição de um prato)
  - [x] Tela de informações de um restaurante acessível através de um click no card do mesmo
  - [x] Tela de informações de um restaurante mostrando o nome, endereço e telefone do mesmo, além da lista de itens do menu (com nome, decrição e preço)
  - [x] Opção na barra de navegação que possibilita o usuário retornar a "home"
  - [x] Opção na barra de navegação que possibilita o usuário deslogar da aplicação
  - [ ] Testes da página "login"
  - [ ] Testes da página "register"
  - [ ] Testes da página "home"
  - [ ] Testes da página "restaurants"

*Back-end:*
  - [x] Criação da estrutura e relacionamentos do banco de dados
  - [x] Criação das rotas de usuário e restaurantes 
  - [x] Criação da rota de itens (incluindo a rota que traz os itens de acordo com o "id" de um restaurante)
  - [x] Popular o banco com usuários pré cadastrados (e-mail e senha criptografados), restaurantes e seus respectivos itens
  - [x] No login, validar previamente se o e-mail se encontra no banco
  - [x] Na home, validar se o usuário possui acesso a pagina atráves de um token gerado no login
  - [x] Testes dos "controllers"
  - [x] Testes das "services"
  - [x] Testes das "models"

> Obs: Projeto ainda recebendo alguns ajustes!

## 👷‍♂️ Testes

Neste projeto está sendo feito uma cobertura de testes **unitários**, para testar a aplicação, entre na pasta que deseja testar (Front/Client: `./client`, Back/Servidor: `./server`) e rode o comando `npm test`

> Obs: Testes front-end ainda não foram criados, confira seu status na sessão **✅ status** deste readme

## 👩‍💻 Acesse o projeto

⚠🛠 Deploy ainda não realizado :'( 🛠⚠

## 💻 Pré-requisitos

Antes de instalar a aplicação, caso opte por rodar a aplicação via [Docker](https://www.docker.com/) verifique se você possui:

  - Versão *igual* ou *superior* a `1.13.1` do `Docker`
  - Portas `3000`, `3001` e `3306` da sua máquina liberadas
  
Sem Docker:

  - Versão *igual* ou *superior* a `16` do `node`
  - Instância do [`MySQL`](https://www.mysql.com/) rodando na porta `3306`
    > ⚠ Atualize as variáveis de ambiente com a senha do seu banco (arquivo .env na pasta /server), e também as variáveis do arquivo config do sequelize (arquivo config na pasta /server/database/config) ⚠
  - Portas `3000` e `3001` da sua máquina liberadas

## 🚀 Instalando localmente

Siga esses os comandos em ordem *de acordo com o método que escolher*

Via Docker:

  - Clone o projeto: `git clone git@github.com:SamuelDAlencar/rest-listing_app.git`
  - Dentro da raiz: `docker-compose up -d`
    > Caso queira rodar os containers acoplado ao terminal para acompanhar o status deles, rode somente `docker-compose up`
  - Popule o banco, dentro da pasta `server/`: `npm run pre:start`
  - Caso não ocorra nenhum erro, acesse a página e faça login: `http://localhost:3000/login`

Sem Docker:

  - Clone o projeto: `git clone git@github.com:SamuelDAlencar/rest-listing_app.git`
  - Dentro da raiz: `npm run install:apps`
  - Ainda na raiz: `npm run start:apps`
  - Caso não ocorra nenhum erro e a aplicação ainda não tenha aberto no browser, acesse essa URL e faça o login: `http://localhost:3000/login`

## 👩‍💻 Utilizando a aplicação

Clique no botão `"Registrar"` ao entrar na aplicação, e insíra dados de login que **não sejam sensíveis**

Caso prefira não fazer registro, basta utilizar um destes 3 usuários já cadastrados no banco:
> (e-mail) - (senha)
  - Usuário 1: `fred@graodireto.com.br - 123Fred`
  - Usuário 2: `samuca@gmail.com - 1samu9`
  - Usuário 2: `gabribo@yahoo.com - gabribas5839`

Após logado e autenticado, basta conferir os restaurantes disponíveis e vasculhar seus cardápios 😋

> ⚠ Tela de perfil ainda não implementada, então o botão que indica o perfil da navbar faz **logout** ⚠

<hr />

> README sendo constantemente atualizado ✍
