const {
  findOrganizerIdByEmail,
} = require("../../../../lib/findOrganizerIdByEmail");
const Camps = require("../../../../models/Camps");
const saveCamps = {
  async getCampUserWise(req, res) {
    const user = req.params.email;
    const organizerId = await findOrganizerIdByEmail(user);
    const result = await Camps.find({ organizer: organizerId })
      .populate("organizer", "email")
      .exec();
    res.send({ success: true, data: result });
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
};
module.exports = saveCamps;
