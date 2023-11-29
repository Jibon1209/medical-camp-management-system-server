const mongoose = require("mongoose");
const {
  findParticipantIdByEmail,
} = require("../../../../lib/findparticipantIdByEmail");
const upcomingParticipants = require("../../../../models/upcomingParticipants");
const UpCommingCamp = require("../../../../models/UpCommingCamp");
const saveupcomingParticipants = {
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
        upcomingcampId,
      } = req.body;
      const participantId = await findParticipantIdByEmail(participantEmail);

      const participantInfo = await upcomingParticipants.create({
        name,
        age,
        gender,
        phone,
        address,
        fees,
        healthInfo,
        emergencyContact,
        participant: participantId,
        upcomingcamp: upcomingcampId,
      });
      await UpCommingCamp.findOneAndUpdate(
        { _id: upcomingcampId },
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
module.exports = saveupcomingParticipants;
