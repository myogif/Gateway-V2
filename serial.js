const { SerialPort, ReadlineParser } = require('serialport');
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

let datanya = [];
const ID = 'agi-rc'


const port = new SerialPort({
    path: 'COM6',
    baudRate: 115200,
});
const parser = new ReadlineParser();
port.pipe(parser);

parser.on('data', onData);

// MAIN Function /// 
function onData(data) {
    if(data){

        data = data.split(" ").join("");
        data = data.split("\r").join("");
        datanya.push(data);
        kirimdata()
    //  console.log(data)
    }
}


async function kirimdata(){
    if(datanya.length > 0){
        let kirim = [...new Set(datanya)] + "," + ID;
        console.log(kirim);
        socket.send(kirim, 8000, '151.106.112.34', function(error){
            if(error){
                socket.close();
            }else{
                datanya = []
            }
        });
    }
}