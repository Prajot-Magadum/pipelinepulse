const mongoose = require("mongoose");

const workflowRunSchema = new mongoose.Schema(
  {
    githubRunId: Number,

    repository: String,

    workflowName: String,

    status: String,

    conclusion: String,

    branch: String,

    commitSha: String,

    url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "WorkflowRun",
  workflowRunSchema
);