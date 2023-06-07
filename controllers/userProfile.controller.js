const UserProfileService = require("../services/userProfile.service");

class UserProfileController {
    userProfileService = new UserProfileService();

    profileFind = async (req, res, next) => {
        try {
            // const userId = res.locals.user
            const userId = "1"

            const profileData = await this.userProfileService.profileFind(userId);

            res.status(201).json({ data: profileData });
        } catch (error) {
            throw error;
        };
    };

    profileEdit = async (req, res, next) => {
        try {
            const { userId, email, password, phone } = req.body;
            console.log(userId, email, password, phone, "00000")
            const profileEditData = await this.userProfileService.profileEdit(userId, email, password, phone);

            res.status(201).json({ data: profileEditData })
        } catch (error) {
            throw error;
        };
    };

    profilePost = async (req, res, next) => {
        try {
            const profilePostData = await this.userProfileService.profilePost();

            res.status(201).json({ data: profilePostData })
        } catch (error) {
            throw error;
        };
    };
};

module.exports = UserProfileController;