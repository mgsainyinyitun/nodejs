
const sequelize = require('../database/connection');
const User = require('../models/User');

module.exports = {
    add: async (user) => {
        return await User.create(user)
            .then(user => {
                console.log("successfully added user.");
                return user.dataValues;
            })
            .catch(err => {
                console.log("Error adding user");
                return err;
            });
    },
    all: async () => {
        return await User.findAll()
            .then(users => {
                console.log("All Users ::: ", users);
                return users;
            })
            .catch(err => {
                console.error('Failed to fetch all users:', err);
                return err;
            })
    },
    remove: async (username) => {
        return await User.destroy({
            where: {
                username,
            }
        })
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    },
    edit: async (username, data) => {
        return await User.update(data, {
            where: {
                username,
            }
        })
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }
}