const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
const authMiddleware = require('../middleware/authMiddleware');
const productValidator = require('../middleware/productValidator');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join("public/images/products"))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

// ************ Controller Require ************
const productosController = require('../controllers/productosController');

/*** GET ALL PRODUCTS ***/
router.get('/', productosController.list);


/*** CREATE ONE PRODUCT */
router.get('/create', authMiddleware,productosController.crear);
router.post('/create',  upload.any(), productValidator.registro, productosController.guardado);



/** GET ONE PRODUCT */
router.get('/detail/:id/', productosController.detail); // http://localhost:3000/products/detail/6

/*** EDIT ONE PRODUCT */
router.get('/editar/:id', authMiddleware, productosController.editar);
router.put('/editar/:id', upload.any(), productValidator.edit,productosController.actualizar);

//Filtrar productos
router.get("/filter", productosController.filter)

//Ruta hacia la búsqueda del producto
router.get('/search', productosController.search)

/*** DELETE ONE PRODUCT */
router.post('/borrar/:id', authMiddleware,productosController.borrar);


module.exports = router;
