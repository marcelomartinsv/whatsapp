"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const logger = require('./utils/logger');
const app = express_1.default();
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
app.get("/", (req, res) => {
    logger.info("usuario en root");
    return res.send("ok");
});
app.use("/", require("../routes"));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => logger.info("server ok!"));
module.exports = app;
