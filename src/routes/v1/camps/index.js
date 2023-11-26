const saveCamps = require("../../../api/v1/camps/controller/saveCamps");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.get("/popular/camps", saveCamps.getPopularCamps);
router.get(
  "/all/camps/:email",
  verifyToken,
  verifyOrganizer,
  saveCamps.getCampUserWise
);
router.get("/camps/:id", saveCamps.getCampIdWise);
router.post("/camps", verifyToken, verifyOrganizer, saveCamps.create);
router.patch(
  "/camps/:id",
  verifyToken,
  verifyOrganizer,
  saveCamps.updateCampsIdWise
);
router.delete(
  "/camps/:id",
  verifyToken,
  verifyOrganizer,
  saveCamps.campDeleteIdWise
);
module.exports = router;
