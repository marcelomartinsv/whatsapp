import { DataType } from 'sequelize-typescript';
const db = require('../../config/database');

export const Call = db.define("call", {
    contactFrom: {
        type: DataType.STRING,
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
    durationInSeconds: {
        type: DataType.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    type: {
        type: DataType.STRING,
        validate: {
            notEmpty: true
        }
    },

}, {
    paranoid: true
})

Call.sync().then(() => {
    console.log('table call created')
})
