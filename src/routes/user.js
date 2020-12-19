const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")

const userController = require('../controllers/userController');


router.get('/registro', userController.registro);
router.post('/registro', userController.store);


router.get('/login', userController.login);
router.post('/login', userController.ingresoUsuario);

router.get('/profile', authMiddleware, userController.profile);


module.exports = router;