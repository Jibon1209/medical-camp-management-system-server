const mongoose = require("mongoose");
const {
  findOrganizerIdByEmail,
} = require("../../../../lib/findOrganizerIdByEmail");
const Camps = require("../../../../models/Camps");

const saveCamps = {
  async getPopularCamps(req, res) {
    const result = await Camps.find().sort({ $natural: -1 }).limit(8).exec();

    res.send({ success: true, data: result });
  },
  async getCampUserWise(req, res) {
    const user = req.params.email;
    const organizerId = await findOrganizerIdByEmail(user);
    const result = await Camps.find({ organizer: organizerId })
      .populate("organizer", "email")
      .exec();
    res.send({ success: true, data: result });
  },
  async getCampIdWise(req, res) {
    const id = req.params.id;
    const result = await Camps.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(result);
  },
  async create(req, res) {
    try {
      const {
        campName,
        location,
        professional,
        fees,
        dateTime,
        image,
        services,
        audience,
        description,
        organizerEmail,
      } = req.body;
      const organizerId = await findOrganizerIdByEmail(organizerEmail);

      const newCamp = await Camps.create({
        campName,
        location,
        professional,
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
  async updateCampsIdWise(req, res) {
    const {
      campName,
      location,
      professional,
      fees,
      dateTime,
      image,
      services,
      audience,
      description,
      organizerEmail,
    } = req.body;
    const organizerId = await findOrganizerIdByEmail(organizerEmail);
    const id = req.params.id;
    const filter = { _id: new mongoose.Types.ObjectId(id) };
    const updatedDoc = {
      $set: {
        campName,
        location,
        professional,
        fees,
        dateTime,
        image,
        services,
        audience,
        description,
        organizer: organizerId,
      },
    };

    const result = await Camps.updateOne(filter, updatedDoc);
    res.send({ success: true, data: result });
  },
  async campDeleteIdWise(req, res) {
    const id = req.params.id;
    const query = { _id: new mongoose.Types.ObjectId(id) };
    const result = await Camps.deleteOne(query);
    res.send({ success: true, data: result });
  },
};
module.exports = saveCamps;
