const registerUser = (req, res, next) => {
  res.json("register User");
};

const loginUser = (req, res, next) => {
  res.json("Login User");
};

const getUser = (req, res, next) => {
  res.json("Profile");
};

const changeAvatar = (req, res, next) => {
  res.json("Change User Avatar");
};

const EditUser = (req, res, next) => {
  res.json("edit User");
};

const getAuthers = (req, res, next) => {
  res.json("Authers");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  EditUser,
  getAuthers,
};
