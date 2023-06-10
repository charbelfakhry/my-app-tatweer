const {DataTypes} = require("sequelize");
const sequelize = require("../DB/configSqlz");


const Client = sequelize.define('Client', {
    client_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    client_first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_username:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    client_email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_mobile:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_gender:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    client_dob:{
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        //defaultValue: DataTypes.NOW,
    },
    
},{
    tableName: "client",
    createdAt: false,
    updatedAt: false,
}
);

module.exports = Client;