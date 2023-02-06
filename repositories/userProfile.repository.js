// const { mapFinderOptions } = require("sequelize/types/utils");
const { user } = require("../models");

class UserProfileRepository {
    profileFind = async (userId) => {
        try {
            console.log(123123123);
            const profileData = await user.findAll({
                where: { userId: userId }
            });

            return profileData;
        } catch (error) {
            throw error;
        };
    };

    profileEdit = async (userId, email, password, phone) => {
        try {
            const profileEditData = await user.update({
                email, password, phone
            }, {
                where: { userId: userId },
            });

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