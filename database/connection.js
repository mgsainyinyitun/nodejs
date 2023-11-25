const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'dc6C1BH-B6G3gfeHBcGb43BgFfhd55HB', {
    host: 'viaduct.proxy.rlwy.net',
    port:'48214',
    dialect: 'mysql',
});
module.exports = sequelize;