const sequelize = require('../../db');
const { DataTypes } = require('sequelize');
const User = require('./User');

const Deficiency = sequelize.define('Deficiency', {
    DeficiencyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    degree: {
        type: DataTypes.STRING,
        allowNull: false
    }
})



module.exports = Deficiency