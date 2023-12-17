var express = require("express");
var router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  EditUser,
  getAuthers,
} = require("../Controller/userController");
/* GET users listing. */
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.get("/", getAuthers);
router.post("/change-avatar", changeAvatar);
router.patch("/edit-user", EditUser);

module.exports = router;
