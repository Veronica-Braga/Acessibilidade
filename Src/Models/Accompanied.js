const sequelize = require('../../db');
const { DataTypes } = require("sequelize")
const User = require('./User');

const Accompanied = sequelize.define('Accompanied', {
    AccompaniedId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Birthday: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Sex: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Accompanied