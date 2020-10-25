import express from 'express';
const router = express.Router();
const callsRouter = require('./calls');
const contactsRouter = require('./contacts');
const messagesRouter = require('./messages');


router.use("/calls", callsRouter);
router.use("/contacts", contactsRouter);
router.use("/messages", messagesRouter);
