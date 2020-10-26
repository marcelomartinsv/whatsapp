"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSuccessResponse = void 0;
exports.setSuccessResponse = (data) => {
    let response = {
        status: "success",
        data
    };
    return response;
};
module.exports = exports.setSuccessResponse;
