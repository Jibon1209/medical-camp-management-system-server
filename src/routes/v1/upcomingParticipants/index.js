const saveupcomingParticipants = require("../../../api/v1/upcomingParticipants/controller/saveupcomingParticipants");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.post(
  "/upcomingParticipants",
  verifyToken,
  saveupcomingParticipants.saveRegistrationAndUpdateCamp
);
module.exports = router;
