const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const fs=require('fs')
const userController = require('../controllers/userController');
const {check, body} = require('express-validator');




const authMiddleware = require("../middleware/authMiddleware");
const uploadUserMiddleware = require('../middleware/uploadUserMiddleware');
const guestMiddleware = require('../middleware/guestMiddleware');
const validator = require('../middleware/validator');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users")
      
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + file.originalname + path.extname(file.originalname))
    }
  })
   
const upload = multer({ storage: storage })

let db = require("../../database/models");

router.get('/login', guestMiddleware,userController.login);
router.post('/login', guestMiddleware, userController.ingresoUsuario);

router.get('/registro', guestMiddleware,userController.registro);
router.post('/registro',   upload.any(), validator.registro, userController.store);


router.get('/profile', authMiddleware, userController.profile);

router.post('/profile', authMiddleware, userController.logout);


module.exports = router;