const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const List = require('./List');


const Card = sequelize.define ('Card', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    listId: {
        type: DataTypes.INTEGER,
        references: {
            model: List,
            key: 'id'
        }
    }
}, {
    timestamps: true
})

Card.belongsTo(List, { foreignKey: 'listId' });
module.exports = Card;