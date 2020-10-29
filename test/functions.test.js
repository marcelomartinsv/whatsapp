const functions = require('./functions');
const setSuccessResponse = require('../dist/helpers/success-response-setters');
const setFailResponse = require('../dist/helpers/fail-response-setter');;

test('first id of fetched contacts should be 3', async () => {
    expect.assertions(1);
    await functions.fetchContacts()
        .then(contacts => expect(contacts.data[0].id).toEqual(3))
})

test('argument 1 should return a contact with id equals to 1', async () => {
    expect.assertions(1);
    await functions.fetchContact(1)
        .then(contacts => expect(contacts.data[0].id).toEqual(1))
})

test('when passing an invalid id number as argument, status should be "error"', async () => {
    expect.assertions(1);
    await functions.fetchContact(1000)
        .then(contacts => expect(contacts.status).toEqual('error'))
})

test('should return mocked contacts', () => {
    functions.fetchMockedContacts()
        .then(contacts => expect(contacts.length).toEqual(2))
})

test('status should be "success"', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.status).toMatch('success'))
})

test('data length should be 1', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data.length).toEqual(1))
})

test('response message should be "Invalid Contact Id"', async () => {
    await functions.fetchMockedContactsById(100)
        .then(message => setFailResponse([message[0]]))
        .then(response => expect(response.data[0].message).toEqual("Invalid Contact Id"))
})