"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const callsRouter = require('./calls');
const contactsRouter = require('./contacts');
const messagesRouter = require('./messages');
router.use("/calls", callsRouter);
router.use("/contacts", contactsRouter);
router.use("/messages", messagesRouter);
