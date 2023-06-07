const { User } = require("../models");

class MemberListRepository {
    findMemberList = async () => {
        try {
            const memberList = await User.findAll();

            return memberList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = MemberListRepository;