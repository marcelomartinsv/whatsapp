const router = require('express').Router();
const contactsRouter = require('./contacts');
const callsRouter = require('./calls');
const messagesRouter = require('./messages');

router.use("/contacts", contactsRouter);
router.use("/calls", callsRouter);
router.use("/messages", messagesRouter);

module.exports = router;