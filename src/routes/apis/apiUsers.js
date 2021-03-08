
const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/apis/apisUsersController');

router.get('/', apiUsersController.list);
router.get('/:id', apiUsersController.find);
router.post('/', apiUsersController.store);

module.exports = router;