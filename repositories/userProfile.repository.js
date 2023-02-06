// const { mapFinderOptions } = require("sequelize/types/utils");
const { user } = require("../models");

class UserProfileRepository {
    profileFind = async (userId) => {
        try {
            const profileData = await user.findAll({
                where: { userId: userId }
            });

            return profileData;
        } catch (error) {
            throw error;
        };
    };

    profileEdit = async () => {
        try {
            const profileEditData = await user.update();

            return profileEditData;
        } catch (error) {
            throw error;
        };
    };

    profilePost = async () => {
        try {
            const profilePostData = await user.create();

            return profilePostData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = UserProfileRepository;