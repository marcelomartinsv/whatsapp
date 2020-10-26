"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setSuccessResponse = (data) => {
    let response = {
        status: "success",
        data
    };
    return response;
};
const setFailResponse = (data) => {
    let response = {
        status: "errorrrrrrrrrrrrr",
        data
    };
    return response;
};
module.exports = [setSuccessResponse, setFailResponse];
