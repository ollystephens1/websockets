const express = require('express');
const socket = require('socket.io');
const PORT = 4000;

// App setup
const app = express();
const server = app.listen(PORT, function(){
  console.log(`Socket demo running on port ${PORT}`);
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
const io = socket(server);

io.on('connection', socket => {
  socket.on('chat', data => {
    console.log('Message sent');
    io.sockets.emit('chat', data);
  });
});