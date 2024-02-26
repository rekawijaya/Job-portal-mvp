const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const informationSchema = new Schema({
     noHp: {
          type: String,
          required: true,
     },
     address: {
          type: String,
          required: true,
     },
     birthday: {
          type: Date,
          required: true,
     },
     userId: {
          type: Schema.Types.ObjectId,
          ref: "Users",
          required: true,
     },
});

module.exports = model("Informations", informationSchema);
