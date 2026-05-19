const mongoose = require("mongoose");

const repositorySchema = new mongoose.Schema(
  {
    githubId: Number,

    name: String,

    fullName: String,

    url: String,

    private: Boolean,

    owner: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Repository",
  repositorySchema
);