const saveJoinCamp = require("../../../api/v1/joincamp/controllers/saveJoinCamps");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.get(
  "/register",
  verifyToken,
  verifyOrganizer,
  saveJoinCamp.getAllRegisteredCamp
);
router.get(
  "/participant/register/:email",
  verifyToken,
  saveJoinCamp.getParticipantRegisterEmailWise
);
router.patch(
  "/changeStatus/register/:id",
  verifyToken,
  verifyOrganizer,
  saveJoinCamp.changeStatusIdWise
);
router.post("/register", saveJoinCamp.saveRegistrationAndUpdateCamp);
module.exports = router;
