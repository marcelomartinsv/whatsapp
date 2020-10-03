const express = require('express');
const router = express.Router();
const db = require('../config/db');

//const newMessage = { "id": 5, "contactFrom": 6, "contact": 1, "date": "07/07/2020", "text": "Hola Pepo, soy Tito" }

router.get("/", (req, res) => { res.send(db.mensajes) })

router.get("/:id", (req, res) => {
    res.send(Array.from(db.mensajes).find(mensaje => mensaje.id == req.params.id))
})
router.post("/add", (req, res) => {
    db.mensajes.push(req.body);
    res.send(db.mensajes[db.mensajes.length - 1])
})

router.delete("/delete/:id", (req, res) => {
    let idList = [];
    db.mensajes.forEach(mensaje => {
        idList.push(mensaje.id);
    })
    let index = idList.indexOf(req.params.id);
    db.mensajes.splice(index, 1)[0];
    res.send("El mensaje ha sido elminado/a de la lista");
})


module.exports = router;