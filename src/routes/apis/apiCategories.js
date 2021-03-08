const express = require('express');
const router = express.Router();
const apisCategoriesController = require('../../controllers/apis/apisCategoriesController');

router.get('/', apisCategoriesController.list);



module.exports = router;