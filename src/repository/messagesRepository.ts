import Message from '../models/Message';

export default class MessagesRepo {

    public static getMessages(): Promise<Array<Message>> {
        return Message.findAll({ order: [['id', 'ASC']] });
    }

    public static getMessage(id: number): Promise<Message[]> {
        return Message.findAll({ where: { id } })
    }

    public static createMessage(message: Message): Promise<Message> {
        return Message.create(message)
    }

    public static async deleteMessage(id: any): Promise<Message[]> {
        const message = await Message.destroy({ where: { id } });
        return Message.findAll({ where: { id }, paranoid: false })
    }

    public static async restoreMessage(id: number): Promise<Message[]> {
        const restoredMessage = await Message.restore({ where: { id } })
        return Message.findAll({ where: { id } })
    }
}