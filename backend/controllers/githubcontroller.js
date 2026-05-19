const githubAPI = require("../services/githubService");

const Repository = require("../models/Repository");

const WorkflowRun = require("../models/WorkflowRun");

// FETCH REPOSITORIES
const fetchRepositories = async (req, res) => {

  try {
    console.log(process.env.GITHUB_TOKEN);

    console.log(process.env.GITHUB_USERNAME);
    const response = await githubAPI.get(
      `/users/${process.env.GITHUB_USERNAME}/repos`
    );

    const repositories = response.data;

    // SAVE TO DATABASE
    for (const repo of repositories) {

      await Repository.findOneAndUpdate(
        { githubId: repo.id },

        {
          githubId: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          url: repo.html_url,
          private: repo.private,
          owner: repo.owner.login,
        },

        {
          upsert: true,
          new: true,
        }
      );
    }

    res.status(200).json(repositories);

  } catch (error) {

    console.log(error.response?.data);

res.status(500).json({

  message:
    error.response?.data ||
    error.message,

});
    

  }

};

//FETCH WORKFLOW RUNS
const fetchWorkflowRuns = async (req, res) => {

  try {

    const { owner, repo } = req.params;
     console.log(process.env.GITHUB_TOKEN);

    console.log(process.env.GITHUB_USERNAME);
    const response = await githubAPI.get(
      `/repos/${owner}/${repo}/actions/runs`
    );

    const runs = response.data.workflow_runs;

    // SAVE TO DATABASE
    for (const run of runs) {

      await WorkflowRun.findOneAndUpdate(
        { githubRunId: run.id },

        {
          githubRunId: run.id,
          repository: repo,
          workflowName: run.name,
          status: run.status,
          conclusion: run.conclusion,
          branch: run.head_branch,
          commitSha: run.head_sha,
          url: run.html_url,
        },

        {
          upsert: true,
          new: true,
        }
      );
    }

const simplifiedRuns = runs.map((run) => ({

  id: run.id,

  workflowName: run.name,

  status: run.status,

  conclusion: run.conclusion,

  branch: run.head_branch,

  createdAt: run.created_at,

}));


res.status(200).json(simplifiedRuns);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
module.exports = {
  fetchRepositories,
  fetchWorkflowRuns,
};