const express = require('express');
const router = express.Router();

const deviceController = require('../controller/deviceController');


// router.get('/', deviceController.infoDevice);


router.get('/',async (req, res) => {
  const result = await deviceController.infoDevice();
  //console.log(result);
  res.render('pages/index', {result : result});
})
router.get('/udp', (req, res) =>{
  res.render('pages/udp');
});

router.get('/api', (req, res) =>{
  res.render('pages/api');
});


router.get('/alarm', (req, res) =>{
  res.render('pages/alarm');
});


module.exports = router;


