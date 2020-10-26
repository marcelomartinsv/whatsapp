import express, { Request, Response } from 'express';
import Contact from '../interfaces/contact';
const router = express.Router();
const Contact = require('../models/Contact');
const setSuccessResponse = require('../helpers/success-response-setters');
const setFailResponse = require('../helpers/fail-response-setter');

router.get("/", (req: Request, res: Response) => {
    Contact.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((contacts: Contact[]) => res.send(setSuccessResponse(contacts)))
        .catch((err: any) => res.sendStatus(400).send(setFailResponse([{ message: err }])))
})

router.get("/:id", (req: Request, res: Response) => {
    Contact.findAll({
        where: { id: req.params.id },
    })
        .then((contact: Contact[]) => {
            if (contact.length) {
                res.send(setSuccessResponse(contact))
            } else {
                res.send(setFailResponse([{ message: "Invalid Contact Id" }]))
            }
        })
        .catch((err: any) => res.sendStatus(400).send(setFailResponse([{ message: err }])))
})

router.post("/add", (req: Request, res: Response) => {
    Contact.create(req.body)
        .then((contact: Contact[]) => res.send(setSuccessResponse(contact)))
        .catch((err: any) => res.status(400).send(setFailResponse([{ message: err }])))
})

router.delete("/delete/:id", (req: Request, res: Response) => {
    Contact.destroy({
        where: { id: req.params.id }
    })
        .then(() => Contact.findAll({ where: { id: req.params.id }, paranoid: false }))
        .then((contact: Contact[]) => {
            if (contact.length) {
                res.send(setSuccessResponse(contact))
            } else {
                res.send(setFailResponse([{ message: "Invalid Contact Id" }]))
            }
        })
        .catch((err: any) => res.status(400).send(setFailResponse([{ message: err }])))
})

router.post("/restore/:id", (req: Request, res: Response) => {
    Contact.restore({
        where: { id: req.params.id }
    })
        .then(() => Contact.findAll({ where: { id: req.params.id } }))
        .then((contact: Contact[]) => {
            if (contact.length) {
                res.send(setSuccessResponse(contact))
            } else {
                res.send(setFailResponse([{ message: "Invalid Contact Id" }]))
            }
        })
        .catch((err: any) => res.sendStatus(500).send(setFailResponse([{ message: err }])))
})


module.exports = router;