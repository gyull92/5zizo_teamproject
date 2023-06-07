const UserProfileRepository = require("../repositories/userProfile.repository");

class UserProfileService {
    userProfileRepository = new UserProfileRepository();

    profileFind = async (userId) => {
        try {
            const profileData = await this.userProfileRepository.profileFind(userId);

            return profileData;
        } catch (error) {
            throw error;
        };
    };

    profileEdit = async (userId, email, password, phone) => {
        try {
            const profileEditData = await this.userProfileRepository.profileEdit(userId, email, password, phone);

            return profileEditData;
        } catch (error) {
            throw error;
        };
    };

    profilePost = async () => {
        try {
            const profilePostData = await this.userProfileRepository.profilePost();

            return profilePostData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = UserProfileService;