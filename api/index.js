const express = require('express');

const helloRoutes = require('./routes/hello');

const router = express.Router();

router.use((req, res, next) => {
  console.log('api!');
  next();
});

router.get('/', (req, res) => {
  res.send('api!');
});

// use routes
router.use('/hello', helloRoutes);

module.exports = router;
