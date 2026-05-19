import API from "./api";

// Get GitHub repositories
export const getRepositories = async () => {
  return API.get("/github/repositories");
};

// Get workflow runs
export const getWorkflows = async (
  owner,
  repo
) => {
  return API.get(
    `/github/workflows/${owner}/${repo}`
  );
};