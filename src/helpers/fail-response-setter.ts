interface ErrorMessage {
    message: string;
}

interface ResponseMessage {
    status: string
    data: ErrorMessage[]
}

export const setFailResponse = (data: ErrorMessage[]) => {
    let response: ResponseMessage = {
        status: "error",
        data
    }
    return response;
}

module.exports = setFailResponse;