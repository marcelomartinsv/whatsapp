const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact');

router.get("/", (req, res) => {
    Contact.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((contacts) => res.send({ status: "success", data: contacts }))
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.get("/:id", (req, res) => {
    Contact.findAll({
        where: { id: req.params.id },
    })
        .then((contact) => {
            if (contact.length) {
                res.send({ status: "success", data: contact })
            } else {
                res.send({ status: "error", data: [{ message: "Invalid contact id" }] })
            }
        })
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.post("/add", (req, res) => {
    Contact.create(req.body)
        .then((contact) => res.send({ status: "success", data: contact }))
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.delete("/delete/:id", (req, res) => {
    Contact.destroy({
        where: { id: req.params.id }
    })
        .then(() => Contact.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((contact) => {
            if (contact.length) {
                res.send({ status: "success", data: contact })
            } else {
                res.send({ status: "error", data: [{ message: "Invalid contact id" }] })
            }
        })
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.post("/restore/:id", (req, res) => {
    Contact.restore({
        where: { id: req.params.id }
    })
        .then(() => Contact.findAll({ where: { id: req.params.id } }))
        .then((contact) => {
            if (contact.length) {
                res.send({ status: "success", data: contact })
            } else {
                res.send({ status: "error", data: [{ message: "Invalid contact id" }] })
            }
        })
        .catch(() => res.sendStatus(400).send({ status: "error", data: [{ message: err }] }))
})

module.exports = router;

