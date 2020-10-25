import express from 'express';
const router = express.Router();
const contactsRouter = require('./contacts');
const callsRouter = require('./calls');
const messagesRouter = require('./messages');

router.use("/contacts", contactsRouter);
router.use("/calls", callsRouter);
router.use("/messages", messagesRouter);
