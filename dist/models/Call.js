"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:1234@localhost:5432/whatsapp');
class Call extends sequelize_1.Model {
}
Call.init({
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
    type: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: "calls",
    sequelize,
    paranoid: true
});
sequelize.sync().then(() => {
    console.log('table created');
})
    .catch((err) => console.log(err));
module.exports = Call;
// import { DataType } from 'sequelize-typescript';
// import sequelize from 'sequelize';
// const db = require('../../config/database');
// export const Call: sequelize.Model = db.define("call", {
//     contactFrom: {
//         type: DataType.STRING,
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
//     durationInSeconds: {
//         type: DataType.INTEGER,
//         validate: {
//             notEmpty: true
//         }
//     },
//     type: {
//         type: DataType.STRING,
//         validate: {
//             notEmpty: true
//         }
//     },
// }, {
//     paranoid: true
// })
// // Call.sync().then(() => {
// //     console.log('table call created')
// // })
