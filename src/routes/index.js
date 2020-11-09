const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

/*** GET ALL PRODUCTS ***/
router.get('/', mainController.index);


module.exports = router;
