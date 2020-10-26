"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:1234@localhost:5432/whatsapp');
class Contact extends sequelize_1.Model {
}
Contact.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    alias: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contacts: {
        type: new sequelize_1.DataTypes.ARRAY(new sequelize_1.DataTypes.INTEGER),
        allowNull: false
    }
}, {
    tableName: "contacts",
    sequelize,
    paranoid: true
});
sequelize.sync().then(() => {
    console.log('table created');
})
    .catch((err) => console.log(err));
module.exports = Contact;
// import { DataType } from 'sequelize-typescript';
// import sequelize from 'sequelize';
// const db = require('../../config/database');
// export const Contact: sequelize.Model = db.define("contact", {
//     name: {
//         type: DataType.STRING,
//         validate: {
//             notEmpty: true
//         }
//     },
//     alias: {
//         type: DataType.STRING,
//         validate: {
//             notEmpty: true
//         }
//     },
//     phone: {
//         type: DataType.STRING,
//         validate: {
//             notEmpty: true
//         },
//         unique: {
//             args: true,
//             msg: 'Este teléfono ya se encuentra registrado'
//         }
//     },
//     imageUrl: {
//         type: DataType.STRING,
//         validate: {
//             notEmpty: true
//         }
//     }
// }, {
//     paranoid: true
// })
// // Contact.sync().then(() => {
// //     console.log('table call created')
// // })
