import { setFailResponse } from "../helpers/fail-response-setter";
import { setSuccessResponse } from "../helpers/success-response-setters";
import CallsRepo from "../repository/callsRepository";
import { Request, Response } from 'express';
import { CallService } from "../use-cases/call-service";

export class CallController {
    private callService: CallService;
    constructor() {
        this.callService = new CallService;
    }
    
    async findAll(req: Request, res: Response) {
        const calls = await CallsRepo.getCalls();
        if (!calls.length) {
            return res.send(setFailResponse({ message: 'request could not be completed' }));
        } else {
            res.send(setSuccessResponse(calls))
        }
    }
}