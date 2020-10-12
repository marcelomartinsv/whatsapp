const Sequelize = require('sequelize');
const db = require('../config/database');

const Call = db.define("call", {
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
    durationInSeconds: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    type: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
})

Call.sync().then(() => {
    console.log('table call created')
})

module.exports = Call;