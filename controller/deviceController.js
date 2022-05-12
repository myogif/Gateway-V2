const {rfid_data} = require('../models');
const getMac = require('getmac');
const os = require('os');


const parsetoHHMMSS = (uptime) => {
  let hh = Math.floor(uptime / 3600);
  let mm = Math.floor((uptime - (hh * 3600)) / 60);
  let ss = Math.floor(uptime - (hh*3600) - (mm * 60));

  if(hh < 10){hh  = "0"+hh;};
  if(mm < 10){mm = "0"+mm;};
  if(ss < 10){ss = "0"+ss;};
  
  return hh + ':' + mm + ':' + ss;
}


exports.infoDevice = async(req, res) => {
  const MacAddress = getMac.default();

  const getDevice = await rfid_data.findAll();

  
  // todo 

  //Device Information 
  let uptime = os.uptime();
  let freemem = os.totalmem() - os.freemem();
  let freeMemory =parseInt((freemem / os.totalmem()) * 100);
  let memoryUsage = 100 - freeMemory;


  // Date Information
  let today = new Date();

  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = `${dd}-${mm}-${yyyy}`;



  const result = {
    mac : MacAddress,
    localtime: new Date().toISOString(),
    uptime : parsetoHHMMSS(uptime),
    freeMemory: freeMemory,
    memoryUsage: memoryUsage,
    device: getDevice,
  } 

  res.render('pages/device', {result: result});
  //res.send(result);
  
}