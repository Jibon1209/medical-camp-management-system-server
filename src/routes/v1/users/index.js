const saveUsers = require("../../../api/v1/users/controllers/saveUsers");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.get("/users", verifyToken, verifyOrganizer, saveUsers.getAllUsers);
router.get("/userProfile/users/:email", verifyToken, saveUsers.getUsersByEmail);
router.get("/users/role/:email", verifyToken, saveUsers.getRole);
router.post("/users", saveUsers.create);
router.put("/update/users/:email", verifyToken, saveUsers.updateProfile);
router.put("/users/:email", saveUsers.update);

module.exports = router;
