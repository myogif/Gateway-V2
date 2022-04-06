const serialPort = require('serialport');
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');



let datanya = [];
const SERIALPORT = 'COM5';
var sp = new serialPort(SERIALPORT, {  
    baudRate: 115200
});
   

const Readline = serialPort.parsers.Readline;

const parser = new Readline;
sp.pipe(parser);
console.log('Starting PROGRAM !!!');
parser.on('data', onData);


const ID = 'agi-rc'

// MAIN Function /// 
function onData(data) {
    console.log(data);
}

async function kirimdata(){
    if(datanya.length > 0){
        let kirim = [...new Set(datanya)] + "," + ID;
        console.log(kirim);
        socket.send(kirim, 8081, '151.106.112.34', function(error){
            if(error){
                socket.close();
            }else{
                datanya = []
            }
        });
    }
}