const { SerialPort, ReadlineParser } = require('serialport');
const {rfid_data} = require('./models');
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const axios = require('axios');
const { config } = require('dotenv');

let datanya = [];

const port = new SerialPort({
    path: '/dev/ttyUSB0',
    baudRate: 115200,
});
const parser = new ReadlineParser();
port.pipe(parser);

parser.on('data', onData);

// Send to API 
async function postData(url, data, api_key){
    try{
        config ={
            api_key : api_key
        }
        let body = {
            rfid_code : data,
        };
        console.log(data);
        let res = await axios.post(url, body, config);
        return res.data;
    }catch(error){
        console.log(error);
        console.log("message : " + error.message);
    }
}

async function alarmMode(url, data, api_key){
    try{
        config = {
            api_key : api_key
        }
        let body = {
            rfid_code : data,
        };
        let res = await axios.post(url, body, config);
        // todo 
        // Logic Alarm 
    }catch{
        console.log(error);
        console.log("message : " + error.message);
    }
}


// MAIN Function /// 
function onData(data) {
    if(data){

        data = data.split(" ").join("");
        data = data.split("\r").join("");
        datanya.push(data);
        kirimdata()
        //console.log(data)
    }
}



async function kirimdata(){
    const  deviceInfo = await rfid_data.findAll(); // Query Database
    const data = deviceInfo.map(item => item.dataValues); // return Array
    const DEVICE_ID = data[0].reader_id; // get Device ID
    const PORT = data[0].port; // get Port
    const IP_SERVER = data[0].ip_server; // get IP Server
    const API_SERVER = data[0].api_server; // get API Server
    const API_KEY = data[0].api_key; // get API Key
    const MODE = data[0].mode; // get Mode

    // TODO CHANGE IP_SERVER to 151.106.112.34
    
    if(datanya.length > 0){
        let kirim = [...new Set(datanya)] + "," + DEVICE_ID;
        console.log(kirim);
        socket.send(kirim, '8000', '151.106.112.34', function(error){
            if(error){
                socket.close();
            }else{
                datanya = [];
            }
        });
    }
}