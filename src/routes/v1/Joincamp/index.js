const saveJoinCamp = require("../../../api/v1/joincamp/controllers/saveJoinCamps");

const router = require("express").Router();
router.post("/register", saveJoinCamp.saveRegistrationAndUpdateCamp);
module.exports = router;
