const express = require('express');
const router = express.Router();
const controller = require('../../api/controller/restaurant.controller');
const validateAccess = require('../../middlewares/validateAccess');

// ! Em uma aplicação real, provavelmente não seria necessário essa autenticação de login na tela produtos/itens/home de um site. Validação adicionada neste caso somente por fins de prática e demonstrar meu conhecimento !

router.get('/all', validateAccess, controller.getAll);
router.get('/', validateAccess, controller.getByName);
router.get('/:id', validateAccess, controller.getById);

module.exports = router;
