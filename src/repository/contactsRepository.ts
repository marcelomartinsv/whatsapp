import Contact from '../models/Contact';

export default class ContactsRepo {

    public static getContacts(): Promise<Array<Contact>> {
        return Contact.findAll({ order: [['id', 'ASC']] });
    }

    public static getContact(id: number): Promise<Contact[]> {
        return Contact.findAll({ where: { id } })
    }

    public static createContact(contact: Contact): Promise<Contact> {
        return Contact.create(contact)
    }

    public static async deleteContact(id: any): Promise<Contact[]> {
        const contact = await Contact.destroy({ where: { id } });
        return Contact.findAll({ where: { id }, paranoid: false })
    }

    public static async restoreContact(id: number): Promise<Contact[]> {
        const restoredContact = await Contact.restore({ where: { id } })
        return Contact.findAll({ where: { id } })
    }
}