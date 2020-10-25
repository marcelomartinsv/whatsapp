"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Message = require('../models/Message');
function setSuccessResponse(data) {
    let response = {
        status: "success",
        data
    };
    return response;
}
function setFailResponse(data) {
    let response = {
        status: "error",
        data
    };
    return response;
}
router.get("/", (req, res) => {
    Message.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((messages) => res.send(setSuccessResponse(messages)))
        .catch((err) => res.sendStatus(400).send(setFailResponse([{ message: err }])));
});
router.get("/:id", (req, res) => {
    Message.findAll({
        where: { id: req.params.id },
    })
        .then((message) => {
        if (message.length) {
            res.send(setSuccessResponse(message));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Message Id" }]));
        }
    })
        .catch((err) => res.sendStatus(400).send(setFailResponse([{ message: err }])));
});
router.post("/add", (req, res) => {
    Message.create(req.body)
        .then((message) => res.send(setSuccessResponse(message)))
        .catch((err) => res.status(400).send(setFailResponse([{ message: err }])));
});
router.delete("/delete/:id", (req, res) => {
    Message.destroy({
        where: { id: req.params.id }
    })
        .then(() => Message.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((message) => {
        if (message.length) {
            res.send(setSuccessResponse(message));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Contact Id" }]));
        }
    })
        .catch((err) => res.status(400).send(setFailResponse([{ message: err }])));
});
router.post("/restore/:id", (req, res) => {
    Message.restore({
        where: { id: req.params.id }
    })
        .then(() => Message.findAll({ where: { id: req.params.id } }))
        .then((message) => {
        if (message.length) {
            res.send(setSuccessResponse(message));
        }
        else {
            res.send(setFailResponse([{ message: "Invalid Contact Id" }]));
        }
    })
        .catch((err) => res.sendStatus(500).send(setFailResponse([{ message: err }])));
});
module.exports = router;
