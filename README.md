# 🍲 Spot
# [🇧🇷 Português]

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
  - Dentro da raiz: `npm run compose:d`
    > Caso queira rodar os containers acoplado ao terminal para acompanhar o status deles, rode somente `npm run compose:up`, e depois popule o banco em outro terminal com o comando `npm run pre:start:server` na raiz, ou `npm run pre:start` caso esteja na pasta /server
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

> Caso queira deslogar da aplicação, basta clicar no icone de perfil na navbar e clicar em "Sair"

## 📲 Bonus: versão mobile

Ao alcancar uma resolução **menor ou igual a 500px**, a aplicação passará a ter um visual que simula um app mobile

> 🌟 Ficaria feliz demais em receber alguns feedbacks de melhoria 🥳 o projeto está sendo desenvolvido com muito carinho 🌟

<hr />

# [🇺🇸 English]

## 🧰 Technologies and tools used

- Javascript](https://www.javascript.com/) - Programming language used
- React](https://reactjs.org/) - Front-end componentization library
- [React Router](https://reactrouter.com/en/main) - React library for route management
- ContextAPI](https://reactjs.org/docs/context.html) - React resource for state management
- [React Icons](https://react-icons.github.io/react-icons/) - React icon library
- [Styled Components](https://styled-components.com/) - React component styling library
- [Node.js](https://nodejs.org/en/) - JS execution field for back-end
- [Express.js](https://expressjs.com/) - Node.js framework
- Sequelize](https://sequelize.org/) - ORM for MySQL relational database requests
- [MySQL](https://www.mysql.com/) - Used relational database
- Docker](https://www.docker.com/) - Containerization service
- [Axios](https://axios-http.com/docs/intro) - Front-end API request library
- Concurrently](https://www.npmjs.com/package/concurrently) - Package used to start up the front and back end simultaneously
- [Jsonwebtoken](https://jwt.io/) - Library used to generate user validation token
- [md5](https://www.md5hashgenerator.com/) - Library that generates a hash from a payload
- [joi](https://www.npmjs.com/package/joi) - Used to validate login fields
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors) - Catches asynchronous errors generated in express
- [dotenv](https://www.npmjs.com/package/dotenv) - Allocate environment variables
- [mocha](https://mochajs.org/) - Node.js testing framework
- [chai](https://www.chaijs.com/) - Node.js assertion library
- [sinon](https://sinonjs.org/) - JavaScript stubs and mocks library

## ✅ Status

*Front-end:*
  - x] Responsive login page and email and password fields
  - [x] Responsive registration page with email, password and user fields
  - x] User and restaurant routes created
  - Responsive home page listing all available restaurants in the bank
  - [x] Styling of the restaurants in the home page
  - x] Option to filter the restaurants through the search field (search by restaurant name, name or description of a dish)
  - x] Restaurant's information screen accessible through a click on the restaurant's card
  - x] Restaurant information screen showing the name, address and phone number of the restaurant, as well as the list of menu items (with name, description and price)
  - x] Option in the navigation bar that allows the user to return to the "home".
  - x] Option in the navigation bar that allows the user to log off from the application
  - [ ] Tests of the "login" page
  - [ ] Tests of the "register" page
  - [ ] Tests of the "home" page
  - [ ] Tests of the "restaurants" page

*Back-end
  - [x] Creation of database structure and relationships
  - [x] Creation of the user and restaurants routes 
  - [x] Creation of the items route (including the route that brings the items according to the "id" of a restaurant)
  - x] Populate the database with pre-registered users (e-mail and password encrypted), restaurants and their respective items
  - x] On the login, validate previously if the e-mail is in the bank
  - x] At home, validate if the user has access to the page through a token generated at login
  - x] Controllers tests
  - [x] Services tests
  - [x] "models" tests

> Note: Project still receiving some adjustments!

## 👷♂️ Testing

In this project we are doing a **unitary** tests coverage, to test the application, enter the folder you want to test (Front/Client: `./client`, Back/Server: `./server`) and run the `npm test` command

> Note: Front-end tests have not been created yet, check their status in the **✅ status** section of this readme

## 👩💻 Access the project

⚠🛠 Deploy not yet done :'( 🛠⚠

## 💻 Prerequisites

Before installing the application, if you choose to run the application via [Docker](https://www.docker.com/) check that you have:

  - Version *equal* or *superior* to `1.13.1` of `Docker`
  - Ports `3000`, `3001` and `3306` on your machine cleared
  
No Docker:

  - Version *equal* or *greater* than `16` of `node`
  - MySQL`](https://www.mysql.com/) instance running on port `3306`
    > ⚠ Update the environment variables with your database password (.env file in the /server folder), and also the variables in the sequelize config file ( config file in the /server/database/config folder) ⚠
  - Ports `3000` and `3001` on your machine cleared

## 🚀 Installing locally

Follow these commands in order *according to the method you choose*

Via Docker:

  - Clone the project: `git clone git@github.com:SamuelDAlencar/rest-listing_app.git`
  - Inside the root: `npm run compose:d`
    > If you want to run the containers docked to the terminal to track their status, just run `npm run compose:up`, then pop up the b

Translated with www.DeepL.com/Translator (free version)
