const Users = require("../../../../models/Users");

const saveUsers = {
  async getAllUsers(req, res) {
    const result = await Users.find();
    res.send(result);
  },
  async create(req, res) {
    try {
      const user = req.body;
      const result = await Users.create(user);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },

  async update(req, res) {
    try {
      const email = req.params.email;
      const user = req.body;

      // Check if the user exists
      const existingUser = await Users.findOne({ email });

      if (existingUser) {
        return res.send(existingUser);
      }

      // Update the user if exists, or create a new one
      const result = await Users.updateOne(
        { email },
        { $set: { ...user, timestamp: Date.now() } },
        { upsert: true }
      );

      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};
module.exports = saveUsers;
