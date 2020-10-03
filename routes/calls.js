const express = require('express');
const router = express.Router();
const db = require('../config/db');

// { "id": 5, "contactFrom": 2, "contact": 5, "date": "01/10/2020"," duration": 23, "type": "Out" }

router.get("/", (req, res) => { res.send(db.llamadas) })

router.get("/:id", (req, res) => {
    res.send(Array.from(db.llamadas).find(llamada => llamada.id == req.params.id))
})
router.post("/add", (req, res) => {
    db.llamadas.push(req.body);
    res.send(db.llamadas[db.llamadas.length - 1])
})

router.delete("/delete/:id", (req, res) => {
    let idList = [];
    db.llamadas.forEach(llamada => {
        idList.push(llamada.id);
    })
    let index = idList.indexOf(req.params.id);
    db.llamadas.splice(index, 1)[0];
    res.send("La llamada ha sido elminado/a de la lista");
})


module.exports = router;