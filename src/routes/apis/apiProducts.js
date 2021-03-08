const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/apis/apisProductsController');

router.get('/', apiProductsController.list);
router.get('/:id', apiProductsController.find);
router.post('/', apiProductsController.store);



module.exports = router;