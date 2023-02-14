const { User } = require('../models');

class AuthRepository {

    getExUser = async(email) => {
        const exUser = await User.findOne({ where: { email } });
        return exUser;
    }

    findExAdmin = async() => {
        const exAdmin = await User.findAll({ where: { userType: 2 } }); 
        return exAdmin;
    }

    createUser = async (email, password, phone, userType) => {
        await User.create({ email, password, phone, userType });
    }

    deleteUser = async (email) => {
        await User.destroy({ where: { email } });
    }
}

module.exports = AuthRepository;