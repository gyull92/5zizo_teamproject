const AuthRepository = require('../repositories/auth.repository');

class AuthService {
    authRepository = new AuthRepository();

    getExUser = async (email) => {
        try {
            const exUser = await this.authRepository.getExUser(email);
            return exUser;
        }catch (error) {
            throw new Error(error.message);
        }
    }

    findExAdmin = async() => {
        try {
            const exAdmin = await this.authRepository.findExAdmin(); 
            return exAdmin;
        }catch (error) {
            throw new Error(error.message);
        }
    }

    createUser = async (email, password, phone, userType) => {
        try {
            await this.authRepository.createUser(email, password, phone, userType);
        }catch (error) {
            throw new Error(error.message);
        }
    }

    deleteUser = async (email) => {
        try {
            await this.authRepository.deleteUser(email);
        }catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = AuthService;