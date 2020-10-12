const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact');

//const newContact = { "id": 7, "name": "pipa", "alias": "elPipaDeLaGente", "number": 123455667, "imageUrl": "pipa.jpg", "contactos": [1, 2, 3, 4, 5, 6] }

router.get("/", (req, res) => { 
    Contact.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((contacts) => res.send(contacts))
        .catch((err) => res.status(400).send(err))
 })

router.get("/:id", (req, res) => {
    Contact.findAll({
        where: { id: req.params.id },
    })
        .then((contact) => res.send(contact))
        .catch((err) => res.status(400).send(err))
})

router.post("/add", (req, res) => {
    Contact.create(req.body)
        .then((contact) => res.send(contact))
        .catch((err) => res.status(400).send(err))
})

router.delete("/delete/:id", (req, res) => {
    Contact.destroy({
        where: { id: req.params.id }
    })
        .then(() => res.sendStatus(202))
        .catch((err) => res.status(400).send(err))
})

module.exports = router;

