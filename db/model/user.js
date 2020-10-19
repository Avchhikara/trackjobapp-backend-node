module.exports = (mongoose) => {
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    verified: {
      type: Number,
      enum: [1, 0],
      default: 0,
    },
    created_on: {
      type: Date,
      default: new Date(),
    },
  });
  return mongoose.model("User", userSchema);
};
