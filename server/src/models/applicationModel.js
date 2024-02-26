const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const applicationSchema = new Schema(
     {
          jobId: {
               type: Schema.Types.ObjectId,
               ref: "Jobs",
               required: true,
          },
          userId: {
               type: Schema.Types.ObjectId,
               ref: "Applicants",
               required: true,
          },
          status: {
               type: String,
               required: true,
          },
          proccess: {
               type: String,
               required: true,
          },
     },
     { timestamps: true }
);

module.exports = model("Applications", applicationSchema);
