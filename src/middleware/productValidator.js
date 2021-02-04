const { body } = require('express-validator');
const db = require('../../database/models');
const path = require('path')

module.exports = {
    registro: [
        body("name")
        .notEmpty()
        .withMessage("Debes ingresar un nombre para el producto")
        .bail()
        .isLength({min:9})
        .withMessage("El nombre debe ser de al menos 9 caracteres"),
    body("price")
        .notEmpty()
        .withMessage("El producto debe tener un precio")
        .bail()
        .isInt()
        .withMessage("El producto debe tener un precio"),
   
    body("description")
        .notEmpty()
        .withMessage("Debes completar una descripción")
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
        .withMessage('Debes cargar una foto del producto')

    ],
    edit:[
        body("name")
        .notEmpty()
        .withMessage("Debes ingresar un nombre para el producto")
        .bail()
        .isLength({min:5})
        .withMessage("El nombre debe ser de al menos 9 caracteres"),
         body("price")
        .notEmpty()
        .withMessage("El producto debe tener un precio")
        .bail()
        .isInt()
        .withMessage("El producto debe tener un precio"),
   
         body("description")
        .notEmpty()
        .withMessage("Debes completar una descripción")
        .bail()
        .isLength({ min:20 })
        .withMessage("La descripción debe tener más de 20 caracteres"),
    
        body("image")
        .custom((value, {req}) =>{
            if(req.method == 'PUT') {
                return true;
            } 
            
            return req.files[0]
            
        }).withMessage('La imagen debe ser obligatoria')
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
    ],
    
        
    
}
