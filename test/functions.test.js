const functions = require('./functions');

test('fetch contacts', async () => {
    expect.assertions(1);
        await functions.fetchContacts()
            .then(contacts => expect(contacts.data[0].id).toEqual(3))
})