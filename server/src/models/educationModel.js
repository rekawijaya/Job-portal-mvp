const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const educationSchema = new Schema({
     degree: {
          type: String,
          required: true,
     },
     school: {
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

module.exports = model("Educations", educationSchema);
