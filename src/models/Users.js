const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "participant",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Users = model("Users", UserSchema);

module.exports = Users;
