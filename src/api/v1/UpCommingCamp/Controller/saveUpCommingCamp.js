const mongoose = require("mongoose");
const UpCommingCamp = require("../../../../models/UpCommingCamp");
const {
  findOrganizerIdByEmail,
} = require("../../../../lib/findOrganizerIdByEmail");
const saveUpCommingCamp = {
  async getUpcomingCamps(req, res) {
    const result = await UpCommingCamp.find().exec();

    res.send({ success: true, data: result });
  },
  async getCampIdWise(req, res) {
    const id = req.params.id;
    const result = await Camps.findOne({
      _id: new mongoose.Types.ObjectId(id),
    })
      .populate({
        path: "professional",
        select: "name",
      })
      .exec();
    res.send(result);
  },
  async create(req, res) {
    try {
      const {
        campName,
        location,
        fees,
        dateTime,
        image,
        services,
        audience,
        description,
        organizerEmail,
      } = req.body;
      const organizerId = await findOrganizerIdByEmail(organizerEmail);

      const newCamp = await UpCommingCamp.create({
        campName,
        location,
        fees,
        dateTime,
        image,
        services,
        audience,
        description,
        organizer: organizerId,
      });
      res.send({ success: true, data: newCamp });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};
module.exports = saveUpCommingCamp;
