import { DataType } from 'sequelize-typescript';
import sequelize from 'sequelize';
const db = require('../../config/database');

export const Contact: sequelize.Model = db.define("contact", {
    name: {
        type: DataType.STRING,
        validate: {
            notEmpty: true
        }
    },
    alias: {
        type: DataType.STRING,
        validate: {
            notEmpty: true
        }
    },
    phone: {
        type: DataType.STRING,
        validate: {
            notEmpty: true
        },
        unique: {
            args: true,
            msg: 'Este teléfono ya se encuentra registrado'
        }
    },
    imageUrl: {
        type: DataType.STRING,
        validate: {
            notEmpty: true
        }
    },
    contactos: {
        type: DataType.ARRAY(DataType.INTEGER), defaultValue: null
    }

}, {
    paranoid: true
})

// Contact.sync().then(() => {
//     console.log('table call created')
// })
