const express = require('express');
const router = express.Router();
const readerController = require('../controller/readerControler');


router.get('/', readerController.showReader);
// router.get('/', (req, res) =>{
//   res.render('views/index');
// })

router.put('/udp', readerController.UDP);
router.put('/api', readerController.API);
router.put('/alarm', readerController.ALARM);

module.exports = router;