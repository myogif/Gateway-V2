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
  
  // todo 
  const uptime = os.uptime();

  const result = {
    mac : MacAddress,
    localtime: new Date().toTimeString(),
    uptime : parsetoHHMMSS(uptime),
    totalMem: os.totalmem(),
    freeMem : os.freemem()

  }

  return res.json({
      status: 'success',
      data: result
  });
  
}