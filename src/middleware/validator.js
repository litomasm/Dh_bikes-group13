const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const db = require('../../database/models');
const {user}= require('../../database/models');

module.exports = {
    register: [
        body('email')
            .notEmpty()
            .withMessage('El campo email es obligatorio')
            .bail()
            .isEmail()
            .withMessage('Email con formato incorrecto')
            .bail()
            .custom((value, {req})=> {
              return User.findOne({
                   where:{
                       email:value
                   }
               })
               .then(user => {
                   if(user){
                       return Promise.reject("Email registrado");
                   }
               })
            }),
            
        body('password')
            .notEmpty()
            .withMessage('El campo es obligatorio')
            .bail()
            .isLength({min: 6})
            .withMessage('La contraseña debe tener al menos 6 caracteres')
            .bail()
            .custom((value, { req }) => value == req.body.retype)
            .withMessage('Las contraseñas no coinciden'),
        body('retype')
            .notEmpty()
            .withMessage('Es obligatorio repetir la contraseña'),
        body('avatar')
            .custom((valueImg, { req }) => req.files[0])
            .withMessage('El avatar es obligatorio')
            .bail()
            .custom((value, { req }) => {
                const acceptedExtensions = ['.jpg', '.png', 'jpeg'];
                const fileExt = path.extname(req.files[0].originalname);
                return acceptedExtensions.includes(fileExt);
            })
            .withMessage('Extensión inválida. Las extensiones aceptadas son: JPG, PNG y JPEG')
    ],
    login:
        body('email')
        .notEmpty()
        .withMessage('El campo email es obligatorio')
        .bail()
          .custom((value, { req }) => {
            return db.User.findOne({
                where:{
                    email: value
                }
            })
            .then((user) =>{
                if(!user || !bcrypt.compareSync(req.body.password, user.password)){
                    return Promise.reject("El email y contraseña no coinciden");
                }
            })
        })
        
    
}
