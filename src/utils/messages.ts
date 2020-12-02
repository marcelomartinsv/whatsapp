const moment = require('moment');

function formatMessage(username: string, text: string, id: string = 'id') {
    return {
        id,
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;