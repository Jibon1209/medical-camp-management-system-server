const saveupcomingProfessional = require("../../../api/v1/upcomingProfessional/controller/saveupcomingProfessional");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.post(
  "/upcomingProfessional",
  verifyToken,
  saveupcomingProfessional.saveprofessionalAndUpdateCamp
);
module.exports = router;
