import express, { Request, Response } from 'express';
const router = express.Router();
const Message = require('../models/Message');

interface Message {
    id: number
    contact: number
    date: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}

interface ResponseMessage {
    status: string
    data: Message[] | {}[]
}

function setSuccessResponse(data: Message[]) {
    let response: ResponseMessage = {
        status: "success",
        data
    }
    return response;
}

function setFailResponse(data: {}[]) {
    let response: ResponseMessage = {
        status: "error",
        data
    }
    return response;
}


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