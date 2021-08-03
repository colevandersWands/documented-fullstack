const controllers = require('../controllers/data-type-1.js');
const express = require('express');

const authorize = require('../middleware/authorization');

const router = express.Router();

router.use(authorize);
router.get('/', controllers.hello);

// write your routes

module.exports = router;
