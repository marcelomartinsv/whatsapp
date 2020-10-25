import { DataType } from 'sequelize-typescript';
import sequelize from 'sequelize';
const db = require('../../config/database');

export const Call: sequelize.Model= db.define("call", {
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

// Call.sync().then(() => {
//     console.log('table call created')
// })

module.exports = Call;