"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Contact = require('../models/Contact');
const setSuccessResponse = require('../helpers/success-response-setters');
const setFailResponse = require('../helpers/fail-response-setter');
router.get("/", (req, res) => {
    Contact.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((contacts) => res.send(setSuccessResponse(contacts)))
        .catch((err) => res.sendStatus(400).send(setFailResponse([{ message: err }])));
});
router.get("/:id", (req, res) => {
    Contact.findAll({
        where: { id: req.params.id },
    })
        .then((contact) => {
        if (contact.length) {
            res.send(setSuccessResponse(contact));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Contact Id" }]));
        }
    })
        .catch((err) => res.sendStatus(400).send(setFailResponse([{ message: err }])));
});
router.post("/add", (req, res) => {
    Contact.create(req.body)
        .then((contact) => res.send(setSuccessResponse(contact)))
        .catch((err) => res.status(400).send(setFailResponse([{ message: err }])));
});
router.delete("/delete/:id", (req, res) => {
    Contact.destroy({
        where: { id: req.params.id }
    })
        .then(() => Contact.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((contact) => {
        if (contact.length) {
            res.send(setSuccessResponse(contact));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Contact Id" }]));
        }
    })
        .catch((err) => res.status(400).send(setFailResponse([{ message: err }])));
});
router.post("/restore/:id", (req, res) => {
    Contact.restore({
        where: { id: req.params.id }
    })
        .then(() => Contact.findAll({ where: { id: req.params.id } }))
        .then((contact) => {
        if (contact.length) {
            res.send(setSuccessResponse(contact));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Contact Id" }]));
        }
    })
        .catch((err) => res.sendStatus(500).send(setFailResponse([{ message: err }])));
});
module.exports = router;
