const { model, Schema } = require("mongoose");
const upcomingProfessionalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
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
  areasOfInterest: {
    type: String,
    required: true,
  },
  professional: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  upcomingcamp: {
    type: Schema.Types.ObjectId,
    ref: "UpCommingCamp",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const upcomingProfessional = model(
  "upcomingProfessional",
  upcomingProfessionalSchema
);

module.exports = upcomingProfessional;