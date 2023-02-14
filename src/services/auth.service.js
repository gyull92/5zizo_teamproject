const AuthRepository = require('../repositories/auth.repository');

class AuthService {
    authRepository = new AuthRepository();

    getExUser = async (email) => {
        const exUser = await this.authRepository.getExUser(email);
        return exUser;
    }

    findExAdmin = async() => {
        const exAdmin = await this.authRepository.findExAdmin(); 
        return exAdmin;
    }

    createUser = async (email, password, phone, userType) => {
        await this.authRepository.createUser(email, password, phone, userType);
    }

    deleteUser = async (email) => {
        await this.authRepository.deleteUser(email);
    }
}

module.exports = AuthService;