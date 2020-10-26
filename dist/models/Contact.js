"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:1234@localhost:5432/whatsapp');
class Contact extends sequelize_1.Model {
}
exports.default = Contact;
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
    contactos: {
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
