const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Message = require('../model/Message');

router.get("/", (req, res) => {
    Message.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((messages) => res.send(messages))
        .catch((err) => res.status(400).send(err))
})

router.get("/:id", (req, res) => {
    Message.findAll({
        where: { id: req.params.id },
    })
        .then((message) => res.send(message))
        .catch((err) => res.status(400).send(err))
})

router.post("/add", (req, res) => {
    Message.create(req.body)
        .then((message) => res.send(message))
        .catch((err) => res.status(400).send(err))
})

router.delete("/delete/:id", (req, res) => {
    Message.destroy({
        where: { id: req.params.id }
    })
        .then(() => res.send('mensaje elminado').sendStatus(202))
        .catch((err) => res.status(400).send(err))
})


module.exports = router;