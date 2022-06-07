const server = require('http').createServer();
const io = require('socket.io')(server)


io.on('connection', function(client) {
  setInterval(() => io.emit('found', 'asdasdasd'), 5000);
  console.log(`Connected with socket : ` + client.id);
  client.on('search', function (text){
    const data = Math.random();
    io.emit('found', data + text);
  });
  
  client.on('disconnect', function(){});
})

module.exports = io;