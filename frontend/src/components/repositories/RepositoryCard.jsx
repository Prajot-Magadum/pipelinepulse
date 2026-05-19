import { FaGithub, FaLock, FaLockOpen } from "react-icons/fa";

const RepositoryCard = ({ repo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <FaGithub
            size={28}
            className="text-gray-700"
          />

          <h2 className="text-xl font-bold text-gray-800">
            {repo.name}
          </h2>

        </div>

        {/* Visibility */}
        <div>
          {repo.private ? (
            <FaLock className="text-red-500" />
          ) : (
            <FaLockOpen className="text-green-500" />
          )}
        </div>

      </div>

      {/* Repository Info */}
      <div className="mt-5 space-y-2">

        <p className="text-gray-600">
          <span className="font-semibold">
            Owner:
          </span>{" "}
          {repo.owner?.login}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">
            Visibility:
          </span>{" "}
          {repo.private ? "Private" : "Public"}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">
            Default Branch:
          </span>{" "}
          {repo.default_branch}
        </p>

      </div>

      {/* Footer */}
      <div className="mt-6">

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg transition"
        >
          View Repository
        </a>

      </div>

    </div>
  );
};

export default RepositoryCard;