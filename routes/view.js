const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('pages/index');
});

router.get('/setting', (req, res) =>{
  res.render('pages/setting');
});

router.get('/api', (req, res) =>{
  res.render('pages/api');
});


router.get('/alarm', (req, res) =>{
  res.render('pages/alarm');
});
module.exports = router;


