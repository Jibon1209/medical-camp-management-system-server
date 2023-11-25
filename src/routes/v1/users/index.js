const saveUsers = require("../../../api/v1/users/controllers/saveUsers");
const verifyOrganizer = require("../../../middlewares/verifyOrganizer");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.get("/users", saveUsers.getAllUsers);
router.get("/users/role/:email", verifyToken, saveUsers.getRole);
router.post("/users", saveUsers.create);
router.put("/users/:email", saveUsers.update);

module.exports = router;
