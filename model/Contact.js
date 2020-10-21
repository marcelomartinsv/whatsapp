const Sequelize = require('sequelize');
const db = require('../config/database');

const Contact = db.define("contact", {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    alias: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    phone: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        },
        unique: {
            args: true,
            msg: 'Este teléfono ya se encuentra registrado'
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    contactos: {
        type: Sequelize.ARRAY(Sequelize.INTEGER), defaultValue: null
    }
}, {
    paranoid: true
})

Contact.sync().then(() => {
    console.log('table contact created')
})

module.exports = Contact;