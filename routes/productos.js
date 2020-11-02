const express = require('express');
const router = express.Router();

/* GET productos page. */
router.get('/', function(req, res, next) {
    res.render('producto', { title: 'DHBIKES' });
  });

router.get('/:idProducto',) 

module.exports = router;