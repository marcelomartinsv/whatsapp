export default interface Contact {
    id: number
    name: string
    alias: string
    phone: string
    imageUrl: string
    contactos: number[];
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}