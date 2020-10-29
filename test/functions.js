const axios = require('axios')

const contacts = [{
    "id": 3,
    "name": "pocho",
    "alias": "elPochoDeLaGente",
    "phone": "123455663",
    "imageUrl": "pocho.jpg",
    "contactos": [1, 2, 4, 5, 6],
    "createdAt": "2020-10-20T23:45:08.391Z",
    "updatedAt": "2020-10-20T23:45:08.391Z",
    "deletedAt": null
},
{
    "id": 4,
    "name": "tito",
    "alias": "elTitoDeLaGente",
    "phone": "123455664",
    "imageUrl": "tito.jpg",
    "contactos": [1, 2, 3, 5, 6],
    "createdAt": "2020-10-20T23:45:21.396Z",
    "updatedAt": "2020-10-20T23:45:21.396Z",
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
            result.push({ message: "Invalid Contact Id"})
        }
        return Promise.resolve(result);
    }
};

module.exports = functions;