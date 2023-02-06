const UserProfileService = require("../services/userProfile.service");

class UserProfileController {
    userProfileService = new UserProfileService();

    profileFind = async () => {
        try {
            userId = res.locals.user
            const profileData = await this.userProfileService.profileFind(userId);

            return profileData;
        } catch (error) {
            throw error;
        };
    };

    profileEdit = async () => {
        try {
            const profileEditData = await this.userProfileService.profileEdit();

            return profileEditData;
        } catch (error) {
            throw error;
        };
    };

    profilePost = async () => {
        try {
            const profilePostData = await this.userProfileService.profilePost();

            return profilePostData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = UserProfileController;