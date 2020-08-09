const socket = io('http://localhost:3000');

const messageForm = document.getElementById('send-container');
const messageInput =  document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');


const userName = prompt('What is your name');
appendMessage('you joined');
socket.emit('new-user', userName);

// subscribe to server event chat-message
socket.on('chat-message',data =>{
    appendMessage(`<b>${data.name}:</b>  ${data.message}`);
});

// subscribe to server event user-connected
socket.on('user-connected', name =>{
    appendMessage(`${name} connected`);
})

// subscribe to server event user-disconnected
socket.on('user-disconnected', user=>{
    appendMessage(`<div style='color:red'><b>${user}</b> has disconnected</div>`);
})

messageForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
    appendMessage(`<b>You:</b>  ${message}`);
});


function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageContainer.append(messageElement);
}