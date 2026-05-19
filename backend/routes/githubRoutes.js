const express = require("express");

const router = express.Router();

const {
  fetchRepositories,
  fetchWorkflowRuns,
} = require("../controllers/githubcontroller");

const {
  protect,
} = require("../middleware/authMiddleware");


// FETCH REPOSITORIES
router.get(
  "/repositories",
  protect,
  fetchRepositories
);


// FETCH WORKFLOW RUNS
router.get(
  "/workflows/:owner/:repo",
  protect,
  fetchWorkflowRuns
);

module.exports = router;