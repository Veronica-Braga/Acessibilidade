const sequelize = require('../../db');
const { DataTypes } = require('sequelize');
const  Experience = require('./Experience');
const  User = require('./User');


const UserExperience = sequelize.define('UserExperience', {
    UserId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
            model: User,
            key: "UserId"
        }
    },
    ExperienceId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
            model: Experience,
            key: "ExperienceId"
        }
    }
})
UserExperience.belongsTo(User,{as : 'User',foreignKey: 'UserId'})
UserExperience.belongsTo(Experience,{as : 'Experience',foreignKey: 'ExperienceId'})

module.exports = UserExperience;