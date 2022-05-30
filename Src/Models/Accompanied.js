const sequelize = require('../../db');
const { DataTypes } = require("sequelize")
const User = require('./User');

const Accompanied = sequelize.define('tb_accompanied', {
    accompaniedid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Accompanied