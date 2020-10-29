const axios = require('axios')

const contacts = [{
    "id": 3,
    "name": "pocho",
    "deletedAt": null
},
{
    "id": 4,
    "name": "tito",
    "deletedAt": null
}]

const functions = {
    fetchContacts: () =>
        axios.get('http://localhost:8080/contacts')
            .then(res => res.data)
            .catch(err => console.log(err)),
    fetchContact: (id) =>
        axios.get(`http://localhost:8080/contacts/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err)),
    fetchMockedContacts: () => {
        return Promise.resolve(contacts);
    },
    fetchMockedContactsById: (id) => {
        const result = [];
        contacts.forEach(contact => {
            if (contact.id === id) {
                result.push(contact);
            }
        })
        if (!result.length) {
            result.push({ message: "Invalid Contact Id" })
        }
        return Promise.resolve(result);
    }
};

module.exports = functions;