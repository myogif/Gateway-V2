const express = require('express');
const router = express.Router();
const readerController = require('../controller/readerControler');


router.get('/', readerController.showReader);
// router.get('/', (req, res) =>{
//   res.render('views/index');
// })

router.post('/udp', readerController.UDP);
router.post('/api', readerController.API);
router.post('/alarm', readerController.ALARM);

module.exports = router;