const { model, Schema } = require("mongoose");

const JoincampSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  healthInfo: {
    type: String,
    required: true,
  },
  emergencyContact: {
    type: String,
    required: true,
  },
  participant: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  camp: {
    type: Schema.Types.ObjectId,
    ref: "Camp",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Joincamp = model("Joincamp", JoincampSchema);

module.exports = Joincamp;
