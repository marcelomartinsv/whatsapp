"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:1234@localhost:5432/whatsapp');
class Call extends sequelize_1.Model {
}
exports.default = Call;
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
