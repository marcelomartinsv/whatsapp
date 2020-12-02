"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socketio = require('socket.io');
const logger = require('./utils/logger');
const app = express_1.default();
const server = http_1.default.createServer(app);
const io = socketio(server);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
io.on('connection', (socket) => {
    socket.emit('message', 'welcome!');
    socket.broadcast.emit('message', 'a user has joined the room');
    socket.on('disconnect', () => {
        io.emit('message', 'a user has left the room');
    });
});
const db = require('../config/database');
db.authenticate()
    .then(() => console.log('db ok!'))
    .catch((err) => console.log(err));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
// app.get("/", (req: Request, res: Response) => {
//     logger.info("usuario en root");
//     return res.send("ok")
// });
app.use("/", index_1.default);
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => logger.info("server ok!"));
module.exports = app;
