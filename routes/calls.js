const express = require('express');
const router = express.Router();
const Call = require('../model/Call');
// { "contactFrom": 2, "contact": 5, "date": "01/10/2020"," duration": 23, "type": "Out" }

router.get("/", (req, res) => {
    Call.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((calls) => res.send(calls))
        .catch((err) => res.status(400).send(err))
})

router.get("/:id", (req, res) => {
    Call.findAll({
        where: { id: req.params.id },
    })
        .then((call) => res.send(call))
        .catch((err) => res.status(400).send(err))
})

router.post("/add", (req, res) => {
    Call.create(req.body)
        .then((call) => res.send(call))
        .catch((err) => res.status(400).send(err))
})

router.delete("/delete/:id", (req, res) => {
    Call.destroy({
        where: { id: req.params.id }
    })
        .then(() => res.sendStatus(202))
        .catch((err) => res.status(400).send(err))
})


module.exports = router;