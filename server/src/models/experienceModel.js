const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const experienceSchema = new Schema({
     company: {
          type: String,
          required: true,
     },
     position: {
          type: String,
          required: true,
     },
     startDate: {
          type: Date,
          required: true,
     },
     endDate: {
          type: Date,
     },
     userId: {
          type: Schema.Types.ObjectId,
          ref: "Users",
          required: true,
     },
});

module.exports = model("Experiences", experienceSchema);
