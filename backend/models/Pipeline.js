const mongoose = require("mongoose");

const pipelineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  repository: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Idle",
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model("Pipeline", pipelineSchema);