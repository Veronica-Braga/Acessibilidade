const sequelize = require('../../db');
const { DataTypes } = require("sequelize")
const User = require('./User');

const Experience = sequelize.define('tb_experience', {
    experienceid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: "userid"
        }
    }

})

module.exports = Experience;