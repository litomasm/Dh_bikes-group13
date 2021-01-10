const express = require('express');
const multer = require('multer');
const path = require('path')
const fs=require('fs')
const userController = require('../controllers/userController');
const {check, body} = require('express-validator');




const authMiddleware = require("../middleware/authMiddleware")
const uploadUserMiddleware = require('../middleware/uploadUserMiddleware')
const guestMiddleware = require('../middleware/guestMiddleware')

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../public/images/users')
      
    },
    filename: function (req, file, cb) {
      console.log(file)
      cb(null, file.fieldname + '-' + Date.now() + '-' +file.originalname)
    }
  })
   
const upload = multer({ storage: storage })

const usersFilePath = path.join(__dirname + "/../data/usuarios.json")

router.get('/login', guestMiddleware,userController.login);
router.post('/login',[
  check('email').isEmail().withMessage('Ingrese un mail valido'),
  check('password').isLength({min: 8}).withMessage('Clave incorrecta')
], userController.ingresoUsuario);

router.get('/registro', guestMiddleware,userController.registro);
router.post('/registro', upload.single('fotoPerfil'), uploadUserMiddleware,[
    check('nombre').isLength({min:2}).withMessage('Este campo debe contener su nombre'),
    check('apellido').isLength({min:2}).withMessage('Este campo debe contener su apellido'),
    check('email').isEmail().withMessage('El email debe ser valido'),
    body('email').custom(function (value){
      let fileUsers = fs.readFileSync(usersFilePath,'utf-8');
      let users;
      if(fileUsers == ""){
          users = [];
      } else {
          users = JSON.parse(fileUsers);
      }
  
      for (let i = 0; i< users.length; i++){
        if(users[i].email == value){
          return false;
        }
      }
      return true;
    }).withMessage('Usuario ya existente'),
    check('password').isLength({min: 8}).withMessage('Debe poner una contraseña valida')
  ],userController.store);




router.get('/profile', authMiddleware, userController.profile);

router.post('/profile', authMiddleware, userController.logout);


module.exports = router;