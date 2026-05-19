const DeploymentHistory = ({ workflows }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

      {/* Header */}
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Workflow History
        </h2>

        <p className="text-gray-500 mt-1">
          Recent CI/CD workflow executions
        </p>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">Workflow</th>

              <th className="p-4">Branch</th>

              <th className="p-4">Status</th>

              <th className="p-4">Conclusion</th>

              <th className="p-4">Created</th>

            </tr>

          </thead>

          <tbody>

            {workflows.map((workflow) => (

              <tr
                key={workflow.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-4 font-medium">
                  {workflow.name}
                </td>

                <td className="p-4">
                  {workflow.head_branch}
                </td>

                <td className="p-4">
                  {workflow.status}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      workflow.conclusion === "success"
                        ? "bg-green-100 text-green-600"
                        : workflow.conclusion === "failure"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {workflow.conclusion || "Running"}
                  </span>

                </td>

                <td className="p-4">
                  {new Date(
                    workflow.created_at
                  ).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default DeploymentHistory;