const express = require('express');
const router = express.Router();
const readerController = require('../controller/readerControler');


router.get('/', readerController.showReader);
router.get('/', (req, res) =>{
  res.render('views/index');
})

module.exports = router;