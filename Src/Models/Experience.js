const sequelize = require('../../db');
const { DataTypes } = require("sequelize")
const User = require('./User');

const Experience = sequelize.define('TB_Experience', {
    ExperienceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Experience;