import { DataType } from 'sequelize-typescript';
import sequelize from 'sequelize';
const db = require('../../config/database');

export const Message: sequelize.Model = db.define("message", {
    contactFrom: {
        type: DataType.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    contact: {
        type: DataType.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    date: {
        type: DataType.DATE,
        validate: {
            notEmpty: true
        }
    },
    text: {
        type: DataType.STRING,
    },
}, {
    paranoid: true
})

// Message.sync().then(() => {
//     console.log('table message created')
// })

module.exports = Message;