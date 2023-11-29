const {
  findProfessionalIdByEmail,
} = require("../../../../lib/findProfessionalByEmail");
const UpCommingCamp = require("../../../../models/UpCommingCamp");
const upcomingProfessional = require("../../../../models/upcomingProfessional");

const saveupcomingProfessional = {
  async saveprofessionalAndUpdateCamp(req, res) {
    try {
      const {
        name,
        specialization,
        phone,
        address,
        areasOfInterest,
        professionalEmail,
        upcomingcampId,
      } = req.body;
      const participantId = await findProfessionalIdByEmail(professionalEmail);

      const participantInfo = await upcomingProfessional.create({
        name,
        specialization,
        phone,
        address,
        areasOfInterest,
        participant: participantId,
        upcomingcamp: upcomingcampId,
      });
      await UpCommingCamp.findOneAndUpdate(
        { _id: upcomingcampId },
        { $inc: { professionalCount: 1 } },
        { new: true, upsert: true }
      );
      res.send({ success: true, data: participantInfo });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};
module.exports = saveupcomingProfessional;
