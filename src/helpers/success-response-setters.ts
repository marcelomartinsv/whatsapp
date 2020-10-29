import Call from '../models/Call';
import Contact from '../models/Contact';
import Message from '../models/Message';

interface ResponseMessage {
    status: string
    data: Call[] | Contact[] | Message[]
}

export const setSuccessResponse = (data: Call[] | Contact[] | Message[]) => {
    let response: ResponseMessage = {
        status: "success",
        data
    }
    return response;
}

module.exports = setSuccessResponse;
