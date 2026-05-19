import { useEffect, useState } from "react";

import WorkflowCard from "./WorkflowCard";
import DeploymentHistory from "./DeploymentHistory";

import LoadingSpinner from "../common/LoadingSpinner";

import { getWorkflows } from "../../services/githubService";

const WorkflowTable = () => {

  const [workflows, setWorkflows] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


 const owner = "Prajot-Magadum";

const repo = "pipelinepulse";

  // Fetch workflow runs
  useEffect(() => {

    const fetchWorkflows = async () => {

      try {

        const response = await getWorkflows(
          owner,
          repo
        );

        // GitHub Actions workflow array
        setWorkflows(response.data.workflow_runs);

      } catch (err) {

        console.error(err);

        setError("Failed to fetch workflow data");

      } finally {

        setLoading(false);
      }
    };

    fetchWorkflows();

  }, []);

  // Loading State
  if (loading) {
    return <LoadingSpinner />;
  }

  // Error State
  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded-lg mt-8">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-12">

      {/* Section Header */}
      <div className="mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Workflow Monitoring
        </h2>

        <p className="text-gray-500 mt-1">
          Real-time GitHub Actions workflow tracking
        </p>

      </div>

      {/* Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {workflows.slice(0, 6).map((workflow) => (

          <WorkflowCard
            key={workflow.id}
            workflow={workflow}
          />

        ))}

      </div>

      {/* Workflow History Table */}
      <DeploymentHistory workflows={workflows} />

    </div>
  );
};

export default WorkflowTable;