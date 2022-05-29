const sequelize = require('../../db');
const { DataTypes } = require('sequelize');
const  Deficiency = require('./Deficiency');
const  Accompanied = require('./Accompanied');
const  Experience = require('./Experience');

const User = sequelize.define('User', {
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Birthday: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull:false
    },
    AccompaniedId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Accompanied,
            key: "AccompaniedId"
        }
    }
})

User.hasOne(Accompanied,{as: 'Accompanied' ,foreignKey: "AccompaniedId"});
User.hasMany(Experience,{as: 'Experience',foreignKey: "ExperienceId"});

module.exports = User