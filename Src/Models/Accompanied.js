const sequelize = require('../../db');
const { DataTypes } = require("sequelize")
const Deficiency = require('./Deficiency');

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
    },
    deficiencyid:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Deficiency,
            key: "deficiencyid"
        }
    }
})
Accompanied.belongsTo(Deficiency, { foreignKey: "deficiencyid" });

module.exports = Accompanied