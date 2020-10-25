"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const db = require('../../config/database');
exports.Message = db.define("message", {
    contactFrom: {
        type: sequelize_typescript_1.DataType.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    contact: {
        type: sequelize_typescript_1.DataType.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    date: {
        type: sequelize_typescript_1.DataType.DATE,
        validate: {
            notEmpty: true
        }
    },
    text: {
        type: sequelize_typescript_1.DataType.STRING,
    },
}, {
    paranoid: true
});
// Message.sync().then(() => {
//     console.log('table message created')
// })
module.exports = exports.Message;
