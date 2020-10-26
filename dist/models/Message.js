"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:1234@localhost:5432/whatsapp');
class Message extends sequelize_1.Model {
}
Message.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    contactFrom: {
        type: new sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    contact: {
        type: new sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: new sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    text: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    }
}, {
    tableName: "messages",
    sequelize,
    paranoid: true
});
sequelize.sync().then(() => {
    console.log('table created');
})
    .catch((err) => console.log(err));
module.exports = Message;
// import { DataType } from 'sequelize-typescript';
// import sequelize from 'sequelize';
// const db = require('../../config/database');
// export const Message: sequelize.Model = db.define("message", {
//     contactFrom: {
//         type: DataType.INTEGER,
//         validate: {
//             notEmpty: true
//         }
//     },
//     contact: {
//         type: DataType.INTEGER,
//         validate: {
//             notEmpty: true
//         }
//     },
//     date: {
//         type: DataType.DATE,
//         validate: {
//             notEmpty: true
//         }
//     },
//     text: {
//         type: DataType.STRING,
//     },
// }, {
//     paranoid: true
// })
// // Message.sync().then(() => {
// //     console.log('table message created')
// // })
