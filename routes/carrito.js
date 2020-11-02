const express = require('express');
const router = express.Router();

/* GET cart page. */
router.get('/', function(req, res, next) {
  res.render('carrito', { title: 'Carrito' });
});


module.exports = router;