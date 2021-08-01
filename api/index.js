const express = require('express');

const dataType1 = require('./data-type-1');
const dataType2 = require('./data-type-2');

const authenticate = require('./middleware/authentication');
const authorize = require('./middleware/authorization');

const router = express.Router();

router.use(authenticate);
router.use(authorize);

router.use(dataType1);
router.use(dataType2);

module.exports = router;
