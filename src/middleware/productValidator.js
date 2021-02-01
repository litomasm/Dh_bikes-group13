const { body } = require('express-validator');
const {User}= require('../../database/models/products');
const path = require('path')

module.exports = {
    registro: [
        body("name")
        .notEmpty()
        .withMessage("Debes completar este campo")
        .bail()
        .isLength({min:5})
        .withMessage("El nombre debe ser de al menos 5 caracteres"),
    body("price")
        .notEmpty()
        .withMessage("Debes completar este campo")
        .bail()
        .isInt()
        .withMessage("El producto debe tener un precio"),
   
    body("description")
        .notEmpty()
        .withMessage("Debes completar este campo.")
        .bail()
        .isLength({ min:20 })
        .withMessage("La descripción debe tener más de 20 caracteres"),
    
    body("image")
        .custom ((value , {req}) => {
            if(req.files[0])
            {
                const imageFormats = ['.jpg', '.png', '.jpeg', '.gif'];
                const productImage = path.extname (req.files[0].originalname)
                return (imageFormats.includes(productImage));
            }
            return true;
        })
        .withMessage ("Formato de imagen Inválido")
        .bail()
        .custom((valueImg, { req }) => req.files[0])
        .withMessage('Debes cargar una imagen.')

    ],
    
        
    
}
