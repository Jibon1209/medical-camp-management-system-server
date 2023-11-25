const saveCamps = require("../../../api/v1/camps/controller/saveCamps");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.get(
  "/all/camps/:email",
  verifyToken,
  verifyOrganizer,
  saveCamps.getCampUserWise
);
router.post("/camps", verifyToken, verifyOrganizer, saveCamps.create);
module.exports = router;
