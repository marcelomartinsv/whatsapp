import express from 'express';
const router = express.Router();
const messagesRouter = require('./messages');
const callsRouter = require('./calls');
const contactsRouter = require('./contacts');

router.use("/messages", messagesRouter);
router.use("/calls", callsRouter);
router.use("/contacts", contactsRouter);


export default router;
