const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('pages/index');
});

router.get('/setting', (req, res) =>{
  res.render('pages/setting');
});

module.exports = router;


