"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const db = require('../../config/database');
exports.Call = db.define("call", {
    contactFrom: {
        type: sequelize_typescript_1.DataType.STRING,
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
    durationInSeconds: {
        type: sequelize_typescript_1.DataType.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    type: {
        type: sequelize_typescript_1.DataType.STRING,
        validate: {
            notEmpty: true
        }
    },
}, {
    paranoid: true
});
exports.Call.sync().then(() => {
    console.log('table call created');
});
module.exports = exports.Call;
