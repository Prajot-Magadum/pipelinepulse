const axios = require("axios");

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

// Token is read dynamically on every request — never undefined
githubAPI.interceptors.request.use((config) => {
  const token = process.env.GITHUB_TOKEN?.trim();
  console.log("TOKEN at request time:", token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

module.exports = githubAPI;