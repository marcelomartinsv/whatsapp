import { Sequelize, Model, DataTypes } from "sequelize";
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/whatsapp')

export default class Call extends Model {
    public id!: number;
    public contactFrom!: number;
    public contact!: number;
    public date!: Date;
    public type!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date | null;
}

Call.init({
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
    type: { 
        type: new DataTypes.STRING(128),
        allowNull: false
    }
},
    {
        tableName: "calls",
        sequelize,
        paranoid: true
    })

sequelize.sync().then(() => {
    console.log('table created')
})
.catch((err) => console.log(err))

module.exports = Call;
