const MemberListService = require("../services/memberList.service");

class MemberListController {
    memberListService = new MemberListService();

    findMemberList = async (req, res, next) => {
        try {
            const memberList = await this.memberListService.findMemberList();

            res.status(201).json({ data: memberList });
        } catch (error) {
            res.status(400).json({ errorMessage: "회원 목록 조회에 실패하였습니다." });
        };
    };
};

module.exports = MemberListController;