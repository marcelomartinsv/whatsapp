function setRoutes(items) {
    const express = require('express');
    const router = express.Router();
    const db = require('../config/db');

    router.get("/", (req, res) => { res.send(db[items]) })

    router.get("/:id", (req, res) => {
        res.send(Array.from(db[items]).find(item => item.id == req.params.id))
    })
    router.post("/add", (req, res) => {
        db.contactos.push(req.body);
        res.send(db[items][db[items].length - 1])
    })

    router.delete("/delete/:id", (req, res) => {
        let indexToRemove;
        db[items].forEach((item, index) => {
            if (item.id == req.params.id) {
                indexToRemove = index;
            }
        })
        db[items].splice(indexToRemove, 1)[0];
        res.send(db[items]);
    })

    module.exports = router;
}

module.exports = setRoutes