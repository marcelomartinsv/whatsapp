"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Call = require('../models/Call');
const setSuccessResponse = require('../helpers/success-response-setters');
const setFailResponse = require('../helpers/fail-response-setter');
router.get("/", (req, res) => {
    Call.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((calls) => res.send(setSuccessResponse(calls)))
        .catch((err) => res.sendStatus(400).send(setFailResponse([{ message: err }])));
});
router.get("/:id", (req, res) => {
    Call.findAll({
        where: { id: req.params.id },
    })
        .then((call) => {
        if (call.length) {
            res.send(setSuccessResponse(call));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Call Id" }]));
        }
    })
        .catch((err) => res.sendStatus(400).send(setFailResponse([{ message: err }])));
});
router.post("/add", (req, res) => {
    Call.create(req.body)
        .then((call) => res.send(setSuccessResponse(call)))
        .catch((err) => res.status(400).send(setFailResponse([{ message: err }])));
});
router.delete("/delete/:id", (req, res) => {
    Call.destroy({
        where: { id: req.params.id }
    })
        .then(() => Call.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((call) => {
        if (call.length) {
            res.send(setSuccessResponse(call));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Call Id" }]));
        }
    })
        .catch((err) => res.status(400).send(setFailResponse([{ message: err }])));
});
router.post("/restore/:id", (req, res) => {
    Call.restore({
        where: { id: req.params.id }
    })
        .then(() => Call.findAll({ where: { id: req.params.id } }))
        .then((call) => {
        if (call.length) {
            res.send(setSuccessResponse(call));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Call Id" }]));
        }
    })
        .catch((err) => res.sendStatus(500).send(setFailResponse([{ message: err }])));
});
module.exports = router;
