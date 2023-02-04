const { user } = require("../models");

class MemberListRepository {
    findMemberList = async () => {
        try {
            const memberList = await user.findAll();

            return memberList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = MemberListRepository;