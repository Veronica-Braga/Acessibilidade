const sequelize = require('../../db');
const { DataTypes } = require('sequelize');
const  Deficiency = require('./Deficiency');
const  Accompanied = require('./Accompanied');
const  Experience = require('./Experience');

const User = sequelize.define('tb_user', {
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phonenumber: {
        type: DataTypes.STRING,
        allowNull:false
    },
    accompaniedid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Accompanied,
            key: "accompaniedid"
        }
    }
})

User.hasOne(Accompanied,{as: 'accompanied' ,foreignKey: "accompaniedid"});
User.hasMany(Experience,{as: 'experience',foreignKey: "experienceid"});

module.exports = User