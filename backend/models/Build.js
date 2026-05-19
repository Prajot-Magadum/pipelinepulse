const mongoose = require("mongoose");

const buildSchema = new mongoose.Schema(
  {
    pipeline: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pipeline",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Running",
        "Success",
        "Failed",
      ],
      default: "Running",
    },

    duration: {
      type: Number,
      default: 0,
    },

    logs: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Build",
  buildSchema
);