const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Board = sequelize.define('Board', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    } 
    
}, {
    timestamps: true
});

module.exports = Board;