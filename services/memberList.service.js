const MemberListRepository = require("../repositories/menberList.repository");

class MemberListService {
    memberListRepository = new MemberListRepository();

    findMemberList = async () => {
        try {
            const memberList = await this.memberListRepository.findMemberList();

            return memberList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = MemberListService;