import express, { Request, Response } from 'express';
import Message from '../interfaces/message';
const router = express.Router();
const Message = require('../models/Message');
const setSuccessResponse = require('../helpers/success-response-setters');
const setFailResponse = require('../helpers/fail-response-setter');

router.get("/", (req: Request, res: Response) => {
    Message.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((messages: Message[]) => res.send(setSuccessResponse(messages)))
        .catch((err: any) => res.sendStatus(400).send(setFailResponse([{ message: err }])))
})

router.get("/:id", (req: Request, res: Response) => {
    Message.findAll({
        where: { id: req.params.id },
    })
        .then((message: Message[]) => {
            if (message.length) {
                res.send(setSuccessResponse(message))
            } else {
                res.send(setFailResponse([{ message: "Invalid Message Id" }]))
            }
        })
        .catch((err: any) => res.sendStatus(400).send(setFailResponse([{ message: err }])))
})

router.post("/add", (req: Request, res: Response) => {
    Message.create(req.body)
        .then((message: Message[]) => res.send(setSuccessResponse(message)))
        .catch((err: any) => res.status(400).send(setFailResponse([{ message: err }])))
})

router.delete("/delete/:id", (req: Request, res: Response) => {
    Message.destroy({
        where: { id: req.params.id }
    })
        .then(() => Message.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((message: Message[]) => {
            if (message.length) {
                res.send(setSuccessResponse(message))
            } else {
                res.send(setFailResponse([{ message: "Invalid Contact Id" }]))
            }
        })
        .catch((err: any) => res.status(400).send(setFailResponse([{ message: err }])))
})

router.post("/restore/:id", (req: Request, res: Response) => {
    Message.restore({
        where: { id: req.params.id }
    })
        .then(() => Message.findAll({ where: { id: req.params.id } }))
        .then((message: Message[]) => {
            if (message.length) {
                res.send(setSuccessResponse(message))
            } else {
                res.send(setFailResponse([{ message: "Invalid Contact Id" }]))
            }
        })
        .catch((err: any) => res.sendStatus(500).send(setFailResponse([{ message: err }])))
})


module.exports = router;