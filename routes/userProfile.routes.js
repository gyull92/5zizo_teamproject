const express = require("express");
const router = express.Router();

const UserProfileController = require("../controllers/userProfile.controller");
const userProfileController = new UserProfileController();

router.get(
    "/userProfileEdit",
    userProfileController.profileFind
);

router.put(
    "/userProfileEdit",
    userProfileController.profileEdit
);

router.post(
    "/userProfilePost",
    userProfileController.profilePost
)

module.exports = router;