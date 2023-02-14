const { User } = require('../models');

class AuthRepository {

    getExUser = async(email) => {
        try {
            const exUser = await User.findOne({ where: { email } });
            return exUser;
        }catch (error) {
            throw new Error(error.message);
        }
    }

    findExAdmin = async() => {
        try {
            const exAdmin = await User.findAll({ where: { userType: 2 } }); 
            return exAdmin;
        }catch (error) {
            throw new Error(error.message);
        }
    }

    createUser = async (email, password, phone, userType) => {
        try {
            await User.create({ email, password, phone, userType });
        }catch (error) {
            throw new Error(error.message);
        }
    }

    deleteUser = async (email) => {
        try {
            await User.destroy({ where: { email } });
        }catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = AuthRepository;