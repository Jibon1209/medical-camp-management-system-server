const {
  findParticipantIdByEmail,
} = require("../../../../lib/findparticipantIdByEmail");
const Camps = require("../../../../models/Camps");
const Joincamp = require("../../../../models/joincamp");

const saveJoinCamp = {
  async saveRegistrationAndUpdateCamp(req, res) {
    try {
      const {
        name,
        age,
        gender,
        phone,
        address,
        fees,
        healthInfo,
        emergencyContact,
        participantEmail,
        campId,
      } = req.body;
      const participantId = await findParticipantIdByEmail(participantEmail);

      const participantInfo = await Joincamp.create({
        name,
        age,
        gender,
        phone,
        address,
        fees,
        healthInfo,
        emergencyContact,
        participant: participantId,
        camp: campId,
      });
      await Camps.findOneAndUpdate(
        { _id: campId },
        { $inc: { participantCount: 1 } },
        { new: true, upsert: true }
      );
      res.send({ success: true, data: participantInfo });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};
module.exports = saveJoinCamp;
