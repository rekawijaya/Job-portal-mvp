const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const jobSchema = new Schema(
     {
          employerId: {
               type: Schema.Types.ObjectId,
               ref: "Employers",
               required: true,
          },
          title: {
               type: String,
               required: true,
          },
          description: {
               type: String,
               required: true,
          },
          location: {
               type: String,
               required: true,
          },
          salary: {
               type: String,
               required: true,
          },
          requirement: {
               type: String,
               required: true,
          },
          responsbility: {
               type: String,
               required: true,
          },
          benefit: {
               type: String,
               required: true,
          },
     },
     { timestamps: true }
);

module.exports = model("Jobs", jobSchema);
