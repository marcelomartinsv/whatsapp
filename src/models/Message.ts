import { Sequelize, Model, DataTypes } from "sequelize";
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/whatsapp');

class Message extends Model {
    public id!: number
    public contactFrom!: number
    public date!: Date
    public text!: string
}

Message.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    contactFrom: {
        type: new DataTypes.INTEGER,
        allowNull: false,
    },
    contact: {
        type: new DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: new DataTypes.DATE,
        allowNull: false
    },
    text: {
        type: new DataTypes.STRING(128),
        allowNull: true
    }
},
    {
        tableName: "messages",
        sequelize,
        paranoid: true
    })

sequelize.sync().then(() => {
    console.log('table created')
})
.catch((err) => console.log(err))

module.exports = Message;
