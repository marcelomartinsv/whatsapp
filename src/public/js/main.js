const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages-container');
const msgInput = document.getElementById('msg');
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const socket = io();

socket.emit('joinRoom', { username, room })

socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users)
})

socket.on('message', message => {
    outputMessage(message, socket.id);

    chatMessages.scrollTop = chatMessages.scrollHeight;
})

msgInput.addEventListener('keypress', (e) => {
    if (e.key !== "Enter") {
        socket.emit('typing', { id: socket.id, user: username, typing: true })
    } else {
        socket.emit('typing', { id: socket.id, user: username, typing: false })
    }
})

socket.on('display', (data) => {
    const typingMsg = document.querySelector('.chat-typing-msg');
    if (data.typing && data.id !== socket.id) {
        typingMsg.innerText = data.user + ' is typing'
    }

    if (!data.typing && data.id !== socket.id) {
        typingMsg.innerText = ''
    }
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    socket.emit('chatMessage', msg);

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
})

function outputMessage(message, id) {

    const div = document.createElement('div');


    if (id === message.id) {
        div.classList.add('own-message')
        div.innerHTML = `<p class="meta"> <span class="own-message-name">${message.username}</span> <span class="hour">${message.time}</span></p>
    <p class="text">${message.text}</p>`

    } else {
        div.classList.add('message')
        div.innerHTML = `<p class="meta"> ${message.username} <span class="hour">${message.time}</span></p>
    <p class="text">${message.text}</p>`
    }


    document.querySelector('.chat-messages').appendChild(div)
}

function outputRoomName(room) {
    roomName.innerText = room;
}

function outputUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.username;
        userList.appendChild(li);
    });
}