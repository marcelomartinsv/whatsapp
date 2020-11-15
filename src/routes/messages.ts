import express, { Request, Response } from 'express';
import MessagesRepo from '../repository/messagesRepository';
const router = express.Router();
const setSuccessResponse = require('../helpers/success-response-setters');
const setFailResponse = require('../helpers/fail-response-setter');

router.get("/", async (req: Request, res: Response) => {
    const messages = await MessagesRepo.getMessages();
    if (!messages.length) {
        return res.send(setFailResponse({ message: 'request could not be completed' }));
    } else {
        res.send(setSuccessResponse(messages))
    }
})

router.get("/:id", async (req: Request, res: Response) => {
    const message = await MessagesRepo.getMessage(Number(req.params.id));
    if (!message.length) {
        return res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(message)
    }
})

router.post("/add", async (req: Request, res: Response) => {
    const message = await MessagesRepo.createMessage(req.body);
    if (!message) {
        res.send(setFailResponse({ message: 'request could not be completed' }));
    } else {
        res.send(setSuccessResponse([message]))
    }
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const message = await MessagesRepo.deleteMessage(Number(req.params.id));
    if (!message) {
        res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(setSuccessResponse(message))
    }

})

router.post("/restore/:id", async (req: Request, res: Response) => {
    const message = await MessagesRepo.restoreMessage(Number(req.params.id));
    if (!message) {
        res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(setSuccessResponse(message))
    }
})

module.exports = router;