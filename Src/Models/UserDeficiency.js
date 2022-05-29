const sequelize = require('../../db');
const { DataTypes } = require('sequelize');
const  Deficiency = require('./Deficiency');
const  User = require('./User');


const UserDeficiency = sequelize.define('UserDeficiency', {
    UserId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
            model: User,
            key: "UserId"
        }
    },
    DeficiencyId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
            model: Deficiency,
            key: "DeficiencyId"
        }
    }
})
UserDeficiency.belongsTo(User,{as : 'User',foreignKey: 'UserId'})
UserDeficiency.belongsTo(Deficiency,{as : 'Deficiency',foreignKey: 'DeficiencyId'})

module.exports = UserDeficiency;