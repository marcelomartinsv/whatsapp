const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Message = require('../model/Message');

//const newMessage = { "id": 5, "contactFrom": 6, "contact": 1, "date": "07/07/2020", "text": "Hola Pepo, soy Tito" }

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
        .then(() => res.sendStatus(202))
        .catch((err) => res.status(400).send(err))
})


module.exports = router;