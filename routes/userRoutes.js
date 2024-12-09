const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// **CREATE** - Rota para criar um novo usuário
router.post('/usuarios', userController.createUser );

// **READ** - Rota para obter todos os usuários
router.get('/usuarios', userController.verUsuarios );

// **READ** - Rota para obter um único usuário por ID
router.get('/usuarios/:id', userController.verUsuarioID);

// **UPDATE** - Rota para atualizar um usuário por ID
router.put('/usuarios/:id', userController.atualizarUsuarioID );

// **DELETE** - Rota para excluir um usuário por ID
router.delete('/usuarios/:id', userController.deletarUsuarioID );


module.exports = router;
