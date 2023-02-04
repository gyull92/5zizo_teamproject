const express = require("express");
const router = express.Router();

const MemberListController = require("../controllers/memberList.controller");
const memberListController = new MemberListController();

router.get(
    "/adminMemberList",
    memberListController.findMemberList
);

module.exports = router;