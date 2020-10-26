// export default class Call {
//     public id!: number
//     public contactFrom!: number
//     public contact!: number
//     public date!: Date
//     public durationInSeconds!: number
//     public type!: string
//     public createdAt!: Date
//     public updatedAt!: Date
//     public deletedAt!: Date
// }

export default interface Call {
    id: number
    contactFrom: number
    contact: number
    date: Date
    durationInSeconds: number
    type: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}
