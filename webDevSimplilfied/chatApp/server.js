const io = require("socket.io")(3000);
const users = {

};


io.on("connection", (socket) => {
  // emit message to UI
  // socket.emit("chat-message", "Welcome to chat room");

  // subscribe to UI messages
  socket.on("new-user", (user) => {
        users[socket.id] = user;
        socket.broadcast.emit('user-connected', user);
  });

  // subscribe to UI messages
  socket.on("send-chat-message", (message) => {
    // broadcast will send the message to everyone except original sender
    socket.broadcast.emit("chat-message", {
        message,
        name: users[socket.id]
    });
  });

  socket.on('disconnect', ()=>{
      socket.broadcast.emit('user-disconnected', users[socket.id]);
      delete users[socket.id];
  })
});
