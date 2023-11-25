const sequelize = require("../database/connection");
const {DataTypes} = require("sequelize");
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.sync().then(() => {
    console.log('User table created successfully!');
  }).catch((error) => {
    console.error('User to create table : ', error);
  });
module.exports = User;
