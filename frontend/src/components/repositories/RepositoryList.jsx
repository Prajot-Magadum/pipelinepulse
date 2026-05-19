import { useEffect, useState } from "react";

import RepositoryCard from "./RepositoryCard";

import LoadingSpinner from "../common/LoadingSpinner";

import { getRepositories } from "../../services/githubService";

const RepositoryList = () => {

  const [repositories, setRepositories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Fetch repositories
  useEffect(() => {

    const fetchRepositories = async () => {

      try {

        const response = await getRepositories();

        setRepositories(response.data);

      } catch (err) {

        console.error(err);

        setError("Failed to fetch repositories");

      } finally {

        setLoading(false);
      }
    };

    fetchRepositories();

  }, []);

  // Loading State
  if (loading) {
    return <LoadingSpinner />;
  }

  // Error State
  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded-lg mt-6">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-10">

      {/* Section Header */}
      <div className="mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Monitored Repositories
        </h2>

        <p className="text-gray-500 mt-1">
          Connected GitHub repositories
        </p>

      </div>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {repositories.map((repo) => (
          <RepositoryCard
            key={repo.id}
            repo={repo}
          />
        ))}

      </div>

    </div>
  );
};

export default RepositoryList;