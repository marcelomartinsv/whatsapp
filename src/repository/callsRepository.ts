import Call from '../models/Call';

export default class CallsRepo {
    public static getCalls(): Promise<Array<Call>> {
        return Call.findAll({ order: [['id', 'ASC']] });
    }

    public static getCall(id: number): Promise<Call[]> {
        return Call.findAll({ where: { id } })
    }

    public static createCall(call: Call): Promise<Call> {
        return Call.create(call)
    }

    public static async deleteCall(id: any): Promise<Call[]> {
        const call = await Call.destroy({ where: { id } });
        return Call.findAll({ where: { id }, paranoid: false })
    }

    public static async restoreCall(id: number): Promise<Call[]> {
        const restoredCall = await Call.restore({ where: { id } })
        return Call.findAll({ where: { id } })
    }
}