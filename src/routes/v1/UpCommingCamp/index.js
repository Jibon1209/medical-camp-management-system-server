const saveUpCommingCamp = require("../../../api/v1/UpCommingCamp/Controller/saveUpCommingCamp");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");
const router = require("express").Router();
router.post(
  "/upcommingcamps",
  verifyToken,
  verifyOrganizer,
  saveUpCommingCamp.create
);
module.exports = router;