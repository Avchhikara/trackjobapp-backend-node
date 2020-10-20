const { Mongoose } = require("mongoose");

module.exports = (mongoose) => {
  const applicationSchema = new mongoose.Schema({
    role: {
      type: String,
      required: true,
      trim: true,
    },
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    applied_on: {
      type: Date,
      required: true,
    },
    stage: {
      type: String,
      required: true,
    },
    created_on: {
      type: Date,
      default: new Date(),
    },
    user_id: {
      type: String,
      required: true,
    },
  });
  return mongoose.model("Application", applicationSchema);
};
