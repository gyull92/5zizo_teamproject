const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth")

const UserProfileController = require("../controllers/userProfile.controller");
const userProfileController = new UserProfileController();

router.get(
    "/userProfileEdit",
    userProfileController.profileFind
);

router.put(
    "/userProfileEdit:id",
    userProfileController.profileEdit
);

router.post(
    "/userProfilePost",
    userProfileController.profilePost
)

module.exports = router;