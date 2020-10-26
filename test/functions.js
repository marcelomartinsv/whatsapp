const axios = require('axios')
const functions = {
    fetchContacts: () =>
        axios.get('http://localhost:8080/contacts')
            .then(res => res.data)
            .catch(err => 'error')
};

module.exports = functions;