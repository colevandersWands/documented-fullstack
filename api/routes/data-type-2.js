const controllers = require('../controllers/data-type-2');
const express = require('express');

const authorize = require('../middleware/authorization');

const router = express.Router();

router.get('/', controllers.hello);

// write your routes

module.exports = router;
