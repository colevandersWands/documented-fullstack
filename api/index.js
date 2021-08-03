const express = require('express');

const dataType1 = require('./routes/data-type-1');
const dataType2 = require('./routes/data-type-2');

const authenticate = require('./middleware/authentication');

const router = express.Router();

router.use(authenticate);

router.use(dataType1);
router.use(dataType2);

module.exports = router;
