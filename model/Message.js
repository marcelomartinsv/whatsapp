const Sequelize = require('sequelize');
const db = require('../config/database');

const Message = db.define("message", {
    contactFrom: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    contact: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    date: {
        type: Sequelize.DATE,
        validate: {
            notEmpty: true
        }
    },
    text: {
        type: Sequelize.STRING,
    },
})

Message.sync().then(() => {
    console.log('table message created')
})

module.exports = Message;