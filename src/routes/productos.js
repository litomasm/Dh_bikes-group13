const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../../public/images/products/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

// ************ Controller Require ************
const productosController = require('../controllers/productosController');

/*** GET ALL PRODUCTS ***/
router.get('/', productosController.index);


/*** CREATE ONE PRODUCT */
router.get('/create', productosController.create);
router.post('/create', upload.any(), productosController.store);



/** GET ONE PRODUCT */
router.get('/detail/:id/', productosController.detail); // http://localhost:3000/products/detail/6

/*** EDIT ONE PRODUCT */
router.get('/edit/:id', productosController.edit);
router.put('/edit/:id', upload.any(), productosController.update);

/*** DELETE ONE PRODUCT */
router.delete('/delete/:id', productosController.destroy);


module.exports = router;
