import { Sequelize, Model, DataTypes } from "sequelize";
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/whatsapp');

class Contact extends Model {
    public id!: number
    public name!: string
    public alias!: string
    public phone!: string
    public imageUrl!: string
    public contacts!: number[]
}

Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    alias: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    contactos: {
        type: new DataTypes.ARRAY(new DataTypes.INTEGER),
        allowNull: false
    }
}, {
    tableName: "contacts",
    sequelize,
    paranoid: true
})

sequelize.sync().then(() => {
    console.log('table created')
})
.catch((err) => console.log(err))

module.exports = Contact;
