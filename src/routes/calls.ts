
import express, { Request, Response } from 'express';
const router = express.Router();
const Call = require('../models/Call');

interface Call {
    id: number
    contactFrom: number
    contact: number
    date: Date
    durationInSeconds: number
    type: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}

interface ResponseMessage {
    status: string
    data: Call[] | {}[]
}

function setSuccessResponse(data: Call[]) {
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
    Call.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((calls: Call[]) => res.send(setSuccessResponse(calls)))
        .catch((err: any) => res.sendStatus(400).send(setFailResponse([{ message: err }])))
})

router.get("/:id", (req: Request, res: Response) => {
    Call.findAll({
        where: { id: req.params.id },
    })
        .then((call: Call[]) => {
            if (call.length) {
                res.send(setSuccessResponse(call))
            } else {
                res.send(setFailResponse([{ message: "Invalid Call Id" }]))
            }
        })
        .catch((err: any) => res.sendStatus(400).send(setFailResponse([{ message: err }])))
})

router.post("/add", (req: Request, res: Response) => {
    Call.create(req.body)
        .then((call: Call[]) => res.send(setSuccessResponse(call)))
        .catch((err: any) => res.status(400).send(setFailResponse([{ message: err }])))
})

router.delete("/delete/:id", (req: Request, res: Response) => {
    Call.destroy({
        where: { id: req.params.id }
    })
        .then(() => Call.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((call: Call[]) => {
            if (call.length) {
                res.send(setSuccessResponse(call))
            } else {
                res.send(setFailResponse([{ message: "Invalid Call Id" }]))
            }
        })
        .catch((err: any) => res.status(400).send(setFailResponse([{ message: err }])))
})

router.post("/restore/:id", (req: Request, res: Response) => {
    Call.restore({
        where: { id: req.params.id }
    })
        .then(() => Call.findAll({ where: { id: req.params.id } }))
        .then((call: Call[]) => {
            if (call.length) {
                res.send(setSuccessResponse(call))
            } else {
                res.send(setFailResponse([{ message: "Invalid Call Id" }]))
            }
        })
        .catch((err: any) => res.sendStatus(500).send(setFailResponse([{ message: err }])))
})


module.exports = router;