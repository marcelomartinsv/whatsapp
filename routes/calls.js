const express = require('express');
const router = express.Router();
const Call = require('../model/Call');

router.get("/", (req, res) => {
    Call.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((calls) => res.send({ status: "success", data: calls }))
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.get("/:id", (req, res) => {
    Call.findAll({
        where: { id: req.params.id },
    })
        .then((call) => {
            if (call.length) {
                res.send({ status: "success", data: call })
            } else {
                res.send({ status: "error", data: [{ message: "Invalid call id" }] })
            }
        })
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.post("/add", (req, res) => {
    Call.create(req.body)
        .then((call) => res.send({ status: "success", data: call }))
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.delete("/delete/:id", (req, res) => {
    Call.destroy({
        where: { id: req.params.id }
    })
        .then(() => Call.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((call) => {
            if (call.length) {
                res.send({ status: "success", data: call })
            } else {
                res.send({ status: "error", data: [{ message: "Invalid call id" }] })
            }
        })
        .catch((err) => res.status(400).send({ status: "error", data: [{ message: err }] }))
})

router.post("/restore/:id", (req, res) => {
    Call.restore({
        where: { id: req.params.id }
    })
        .then(() => Call.findAll({ where: { id: req.params.id } }))
        .then((call) => {
            if (call.length) {
                res.send({ status: "success", data: call })
            } else {
                res.send({ status: "error", data: [{ message: "Invalid call id" }] })
            }
        })
        .catch(() => res.sendStatus(500).send({ status: "error", data: [{ message: err }] }))
})


module.exports = router;