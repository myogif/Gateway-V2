const { SerialPort, ReadlineParser } = require('serialport')
// const port = new SerialPort({ 
//     path: 'COM6', 
//     baudRate: 115200 
// });
// const parser = new ReadlineParser()
// port.pipe(parser)
// parser.on('data', onData)
// port.write('ROBOT PLEASE RESPOND\n')
// ROBOT ONLINE
console.log("Get Serial Port list")
SerialPort.list().then(function(ports){
    ports.forEach(function(port){
      console.log("Port: ", port.path);
    })
  });

  // more about get port list -- https://stackoverflow.com/questions/49250638/serialport-npm-list-of-available-com-ports --

// function onData(data){
//     console.log(data);
// }

// Creating the parser and piping can be shortened to
//const parser = port.pipe(new ReadlineParser())