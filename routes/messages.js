const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Message = require('../model/Message');

router.get("/", (req, res) => {
    Message.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((messages) => res.send({ status: "success", data: messages }))
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.get("/:id", (req, res) => {
    Message.findAll({
        where: { id: req.params.id },
    })
        .then((message) => {
            if (message.length) {
                res.send({ status: "success", data: message })
            } else {
                res.send({ status: "error", data: [{ message: "Invalid message id" }] })
            }
        })
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.post("/add", (req, res) => {
    Message.create(req.body)
        .then((message) => res.send({ status: "success", data: message }))
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.delete("/delete/:id", (req, res) => {
    Message.destroy({
        where: { id: req.params.id }
    })
        .then(() => Message.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((message) => {
            if (message.length) {
                res.send({ status: "success", data: message }).sendStatus(200)
            } else {
                res.send({ status: "error", data: [{ message: "Invalid message id" }] })
            }
        })
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.post("/restore/:id", (req, res) => {
    Message.restore({
        where: { id: req.params.id }
    })
        .then(() => Message.findAll({ where: { id: req.params.id } }))
        .then((message) => {
            if (message.length) {
                res.send({ status: "success", data: message }).sendStatus(200)
            } else {
                res.send({ status: "error", data: [{ message: "Invalid message id" }] })
            }
        })
        .catch(() => res.sendStatus(400).send({ status: "error", data: [{ message: err }] }))
})


module.exports = router;