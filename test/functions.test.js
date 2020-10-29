const functions = require('./functions');
const setSuccessResponse = require('../dist/helpers/success-response-setters');
const setFailResponse = require('../dist/helpers/fail-response-setter');
require('jest-extended');

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

test('should return mocked contacts', async () => {
    await functions.fetchMockedContacts()
        .then(contacts => expect(contacts).toHaveLength(2))
})

test('contacts should be array', async () => {
    await functions.fetchMockedContacts()
        .then(contacts => expect(contacts).toBeArray())
})


test('status should be "success"', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.status).toEqual('success'))
})

test('contact should have property id', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0]).toHaveProperty('id'))
})

test('data length should be 1', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data).toHaveLength(1))
})

test('contact id should be a number', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0].id).toBeNumber())
})

test('contact should match object in test', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0]).toMatchObject(
            {
                "id": 3,
                "name": "pocho",
                "deletedAt": null
            }
        ))
})

test('contact should not have property "phone"', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0]).not.toHaveProperty('phone'))
})

test('contact should be an object', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0]).toBeObject())
})

test('contact should have keys id, name and deletedAt', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0]).toContainKeys(['id', 'name', 'deletedAt']))
})

test('deletedAt field should be falsy', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0].deletedAt).toBeFalsy())
})

test('deletedAt field should be null', async () => {
    await functions.fetchMockedContactsById(3)
        .then(contact => setSuccessResponse(contact))
        .then(response => expect(response.data[0].deletedAt).toBeNull())
})

test('response message should be a string', async () => {
    await functions.fetchMockedContactsById(100)
        .then(message => setFailResponse([message[0]]))
        .then(response => expect(response.data[0].message).toBeString());
})

test('response message should be "Invalid Contact Id"', async () => {
    await functions.fetchMockedContactsById(100)
        .then(message => setFailResponse([message[0]]))
        .then(response => expect(response.data[0]).toHaveProperty("message"))
})

test('response message should be "Invalid Contact Id"', async () => {
    await functions.fetchMockedContactsById(100)
        .then(message => setFailResponse([message[0]]))
        .then(response => expect(response.data[0].message).toEqual("Invalid Contact Id"))
})

test('response message should be "Invalid Contact Id"', async () => {
    await functions.fetchMockedContactsById(100)
        .then(message => setFailResponse([message[0]]))
        .then(response => expect(response.data[0].message).toBeDefined())
})

test('response message should be "Invalid Contact Id"', async () => {
    await functions.fetchMockedContactsById(100)
        .then(message => setFailResponse([message[0]]))
        .then(response => expect(response.data[0]).not.toHaveProperty("id"))
})