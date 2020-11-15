import express, { Request, Response } from 'express';
import ContactsRepo from '../repository/contactsRepository';
const router = express.Router();
const setSuccessResponse = require('../helpers/success-response-setters');
const setFailResponse = require('../helpers/fail-response-setter');

router.get("/", async (req: Request, res: Response) => {
    const contacts = await ContactsRepo.getContacts();
    if (!contacts.length) {
        return res.send(setFailResponse({ message: 'request could not be completed' }));
    } else {
        res.send(setSuccessResponse(contacts))
    }
})

router.get("/:id", async (req: Request, res: Response) => {
    const contact = await ContactsRepo.getContact(Number(req.params.id));
    if (!contact.length) {
        return res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(contact)
    }
})

router.post("/add", async (req: Request, res: Response) => {
    const contact = await ContactsRepo.createContact(req.body);
    if (!contact) {
        res.send(setFailResponse({ message: 'request could not be completed' }));
    } else {
        res.send(setSuccessResponse([contact]))
    }
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const contact = await ContactsRepo.deleteContact(Number(req.params.id));
    if (!contact) {
        res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(setSuccessResponse(contact))
    }

})

router.post("/restore/:id", async (req: Request, res: Response) => {
    const contact = await ContactsRepo.restoreContact(Number(req.params.id));
    if (!contact) {
        res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(setSuccessResponse(contact))
    }
})

module.exports = router;