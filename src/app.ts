import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import api from './routes/index';
import path from 'path'
import http from 'http'
import { Socket } from 'socket.io';
const socketio = require('socket.io')
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');

const logger = require('./utils/logger')

const app: Application = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket: Socket) => {

    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room)
        socket.join(user.room)
        socket.emit('message', formatMessage('Admin', 'Welcome to the chat!'))
        socket.broadcast.to(user.room).emit('message', formatMessage('Admin', `${user.username} has joined the room`));

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    })

    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id)

        io.emit('message', formatMessage(`${user.username}`, msg, socket.id))
    })

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit('message', formatMessage('Admin', `${user.username} has left the room`))
        }

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    })

    socket.on('typing', (data) => {
        io.emit('display', data)
    })
})

const db = require('../config/database');

db.authenticate()
    .then(() => console.log('db ok!'))
    .catch((err: Error) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use("/", api);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => logger.info("server ok!"));


module.exports = app;

