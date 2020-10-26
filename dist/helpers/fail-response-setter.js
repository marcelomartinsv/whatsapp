"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFailResponse = void 0;
exports.setFailResponse = (data) => {
    let response = {
        status: "error",
        data
    };
    return response;
};
module.exports = exports.setFailResponse;
