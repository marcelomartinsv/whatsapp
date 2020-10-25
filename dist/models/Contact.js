"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const db = require('../../config/database');
exports.Contact = db.define("contact", {
    name: {
        type: sequelize_typescript_1.DataType.STRING,
        validate: {
            notEmpty: true
        }
    },
    alias: {
        type: sequelize_typescript_1.DataType.STRING,
        validate: {
            notEmpty: true
        }
    },
    phone: {
        type: sequelize_typescript_1.DataType.STRING,
        validate: {
            notEmpty: true
        },
        unique: {
            args: true,
            msg: 'Este teléfono ya se encuentra registrado'
        }
    },
    imageUrl: {
        type: sequelize_typescript_1.DataType.STRING,
        validate: {
            notEmpty: true
        }
    },
    contactos: {
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.INTEGER), defaultValue: null
    }
}, {
    paranoid: true
});
// Contact.sync().then(() => {
//     console.log('table call created')
// })
