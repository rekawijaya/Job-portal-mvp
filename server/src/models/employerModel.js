const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const employerSchema = new Schema(
     {
          email: {
               type: String,
               required: true,
          },
          password: {
               type: String,
               required: true,
          },
          companyName: {
               type: String,
               required: true,
          },
          companyDescription: {
               type: String,
               required: true,
          },
          address: {
               type: String,
               required: true,
          },
          noHp: {
               type: String,
               required: true,
          },
     },
     { timestamps: true }
);

module.exports = model("Employers", employerSchema);
