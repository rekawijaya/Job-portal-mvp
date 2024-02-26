const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const documentSchema = new Schema({
     documentName: {
          type: String,
          required: true,
     },
     documentImage: {
          type: String,
          required: true,
     },
     userId: {
          type: Schema.Types.ObjectId,
          ref: "Users",
          required: true,
     },
});

module.exports = model("Documents", documentSchema);
