# 🥘 rest-listing_app

Projeto fullstack que consiste em um MVP de uma aplicação do ramo gastronômico, que após logado (email e senha criptografados), traz para o usuário uma lista de restaurantes e suas respectivas informações, como endereço, número de telefone, e seus cardápios, contendo detalhes de cada item do menu como descrição e preço

## ✅ Status

*Front-end:*
  - [x] Página de login responsiva e campos de email e senha
  - [x] Rotas de usuário e de restaurantes criadas
  - [ ] Página "home" responsiva listando todos os restaurantes disponíveis no banco
  - [ ] Opção de filtro dos restaurantes atráves do campo de busca (que busque pelo nome do restaurante, nome ou descrição de um prato)
  - [ ] Tela de informações de um restaurante acessível através de um click no card do mesmo
  - [ ] Tela de informações de um restaurante mostrando o nome, endereço e telefone do mesmo, além da lista de itens do menu (com nome, decrição e preço)
  - [ ] Opção na barra de navegação que possibilita o usuário retornar a "home"
  - [ ] Opção na barra de navegação que possibilita o usuário deslogar da aplicação

*Back-end:*
  - [x] Criação da estrutura e relacionamentos do banco de dados
  - [x] Criação das rotas de usuário e restaurantes 
  - [x] Popular o banco com usuários pré cadastrados (e-mail e senha criptografados), restaurantes e seus respectivos itens
  - [ ] No login, validar previamente se o e-mail se encontra no banco
  - [ ] Na home, validar se o usuário possui acesso a pagina atráves de um token gerado no login

> Obs: Projeto em desenvolvimento!

## 👩‍💻 Acesse o projeto

⚠🛠 Deploy ainda não realizado :'( 🛠⚠

## 💻 Pré-requisitos

Antes de instalar a aplicação, caso opte por rodar a aplicação via [Docker](https://www.docker.com/) verifique se você possui:

  - Versão *igual* ou *superior* a `1.13.1` do `Docker`
  - Portas `3000`, `3001` e `3306` da sua máquina liberadas
  
Sem Docker:

  - Versão *igual* ou *superior* a `16` do `node`
  - Instância do [`MySQL`](https://www.mysql.com/) rodando na porta `3306`
  - Portas `3000` e `3001` da sua máquina liberadas

## 🚀 Instalando localmente

Siga esses os comandos em ordem *de acordo com o método que escolher*

Via Docker:

  - Clone o projeto: `git clone git@github.com:SamuelDAlencar/rest-listing_app.git`
  - Dentro da raiz: `docker-compose up -d`
    > Caso queira rodar os containers acoplado ao terminal para acompanhar o status deles, rode somente `docker-compose up`
  - Caso não ocorra nenhum erro, acesse a página e faça login: `http://localhost:3000/login`

Sem Docker:

  - Clone o projeto: `git clone git@github.com:SamuelDAlencar/rest-listing_app.git`
  - Dentro da raiz: `npm install:apps`
  - Ainda na raiz: `npm start:apps`
  - Caso não ocorra nenhum erro, acesse a página e faça login: `http://localhost:3000/login`

⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙⚙
