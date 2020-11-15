
import express, { Request, Response } from 'express';
import CallsRepo from '../repository/CallsRepository';
const router = express.Router();
const setSuccessResponse = require('../helpers/success-response-setters');
const setFailResponse = require('../helpers/fail-response-setter')

router.get("/", async (req: Request, res: Response) => {
    const calls = await CallsRepo.getCalls();
    if (!calls.length) {
        return res.send(setFailResponse({ message: 'request could not be completed' }));
    } else {
        res.send(setSuccessResponse(calls))
    }
})

router.get("/:id", async (req: Request, res: Response) => {
    const call = await CallsRepo.getCall(Number(req.params.id));
    if (!call.length) {
        return res.sendStatus(404).send(setFailResponse({ message: 'Invalid id' }));
    } else {
        res.send(call)
    }
})

router.post("/add", async (req: Request, res: Response) => {
    const call = await CallsRepo.createCall(req.body);
    if (!call) {
        res.send(setFailResponse({ message: 'request could not be completed' }));
    } else {
        res.send(setSuccessResponse([call]))
    }
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const call = await CallsRepo.deleteCall(Number(req.params.id));
    if (!call) {
        res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(setSuccessResponse(call))
    }

})

router.post("/restore/:id", async (req: Request, res: Response) => {
    const call = await CallsRepo.restoreCall(Number(req.params.id));
    if (!call) {
        res.send(setFailResponse({ message: 'Invalid Id' }));
    } else {
        res.send(setSuccessResponse(call))
    }
})

module.exports = router;