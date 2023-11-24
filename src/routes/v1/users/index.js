const saveUsers = require("../../../api/v1/users/controllers/saveUsers");
const verifyAdmin = require("../../../middlewares/verifyAdmin");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();
router.get("/users", saveUsers.getAllUsers);
router.post("/users", saveUsers.create);
router.put("/users/:email", saveUsers.update);
module.exports = router;
