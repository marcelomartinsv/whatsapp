const express = require('express');
const router = express.Router();
const db = require('../config/db');

//const newContact = { "id": 7, "name": "pipa", "alias": "elPipaDeLaGente", "number": 123455667, "imageUrl": "pipa.jpg", "contactos": [1, 2, 3, 4, 5, 6] }

router.get("/", (req, res) => { res.send(db.contactos) })

router.get("/:id", (req, res) => {
    res.send(Array.from(db.contactos).find(contacto => contacto.id == req.params.id))
})
router.post("/add", (req, res) => {
    db.contactos.push(req.body);
    res.send(db.contactos[db.contactos.length - 1])
})

router.delete("/delete/:id", (req, res) => {
    let idList = [];
    db.contactos.forEach(contact => {
        idList.push(contact.id);
    })
    let index = idList.indexOf(req.params.id);
    let deletedContact = db.contactos.splice(index, 1)[0];
    res.send(deletedContact.name + " ha sido elminado/a de la lista");
})


module.exports = router;

