const sequelize = require('../../db');
const { DataTypes } = require('sequelize');
const User = require('./User');

const Deficiency = sequelize.define('tb_deficiency', {
    deficiencyid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    degree: {
        type: DataTypes.STRING,
        allowNull: false
    }
})



module.exports = Deficiency