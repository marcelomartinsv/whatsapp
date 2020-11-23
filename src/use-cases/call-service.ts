import Call from '../interfaces/call';
import CallsRepo from '../repository/callsRepository';

export class CallService {
    private callsRepository: CallsRepo;
    constructor(callsRepo: CallsRepo) {
        this.callsRepository = callsRepo;
    }
}