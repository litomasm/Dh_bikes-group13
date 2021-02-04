const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const path = require('path')
const db = require('../../database/models');
const usersController = require('../controllers/userController');

module.exports = {
    registro: [
        body("name")
         .isLength({min:3})
         .withMessage("Campo de nombre debe tener un mínimo de 3 caracteres"),
        body("last_name")
         .isLength({min:3})
         .withMessage("Campo de apellido debe tener un mínimo de 3 caracteres"),
        body('email')
            .isEmail()
            .withMessage('El email debe ser válido')
            .bail()
            .custom(async (value) => {
                
				const exists = await db.User.findOne({
					where: {
						email: value,
					},
				});
				if (exists) {
					return Promise.reject();
				}
			})
			.withMessage('El usuario ya existe'), 
          
        body('password')
            .isLength({min: 8})
            .withMessage('La contraseña debe tener al menos 8 caracteres'),
            
        
        body('avatar')
        .custom((value, { req }) => req.files[0])
        .withMessage('La imagen de perfil es obligatoria')
        .bail()
        .custom((value, { req }) => {
            const extn = path.extname(req.files[0].originalname);
            return extn == '.jpg' || extn == '.png' || extn == '.jpeg';
        })
        .withMessage('Formato incorrecto'),
        
    ],
    login: [
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
            }),
            
        body('password')
            .isLength({min: 8})
            .withMessage('La contraseña debe tener al menos 8 caracteres')
            
    ]
    
}
