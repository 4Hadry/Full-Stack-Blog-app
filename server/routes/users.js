var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/get", (req, res, next) => {
  res.json("respond with a resource");
});

module.exports = router;
