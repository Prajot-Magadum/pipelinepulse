import { useEffect, useState } from "react";

import API from "../services/api";

import DashboardLayout from "../components/layout/DashboardLayout";

import StatsCard from "../components/analytics/StatsCard";
import PipelineChart from "../components/analytics/PipelineChart";

import RepositoryList from "../components/repositories/RepositoryList";

import WorkflowTable from "../components/workflows/WorkflowTable";

import {
  FaGithub,
  FaCheckCircle,
  FaTimesCircle,
  FaCodeBranch,
} from "react-icons/fa";

function Dashboard() {

  const [pipelines, setPipelines] = useState([]);

  const [builds, setBuilds] = useState([]);

  // Fetch Dashboard Data
  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      // Fetch Pipelines
      const pipelineResponse =
        await API.get("/pipelines");

      setPipelines(
        pipelineResponse.data
      );

      // Fetch Builds
      const buildResponse =
        await API.get("/builds");

      setBuilds(
        buildResponse.data
      );

    } catch (error) {

      console.log(error);

    }
  };

  // Successful Builds
  const successfulBuilds =
    builds.filter(
      (build) => build.status === "Success"
    ).length;

  // Failed Builds
  const failedBuilds =
    builds.filter(
      (build) => build.status === "Failed"
    ).length;

  return (

    <DashboardLayout>

      {/* PAGE HEADER */}
      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Pipeline Dashboard 🚀
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor repositories, workflows, and CI/CD analytics
        </p>

      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <StatsCard
          title="Repositories"
          value={repositories.length}
          icon={<FaGithub size={24} />}
          color="bg-blue-100 text-blue-600"
        />

        <StatsCard
          title="Successful Builds"
          value={successfulBuilds}
          icon={<FaCheckCircle size={24} />}
          color="bg-green-100 text-green-600"
        />

        <StatsCard
          title="Failed Builds"
          value={failedBuilds}
          icon={<FaTimesCircle size={24} />}
          color="bg-red-100 text-red-600"
        />

        <StatsCard
          title="Workflow Runs"
          value={builds.length}
          icon={<FaCodeBranch size={24} />}
          color="bg-yellow-100 text-yellow-600"
        />

      </div>

      {/* PIPELINE ANALYTICS */}
      <PipelineChart builds={builds} />

      {/* REPOSITORY MONITORING */}
      <RepositoryList />

      {/* WORKFLOW MONITORING */}
      <WorkflowTable />

    </DashboardLayout>
  );
}

export default Dashboard;