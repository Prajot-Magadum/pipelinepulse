import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaCodeBranch,
} from "react-icons/fa";

const WorkflowCard = ({ workflow }) => {

  // Status Colors
  const getStatusStyle = () => {

    if (workflow.status === "completed") {

      if (workflow.conclusion === "success") {
        return {
          color: "text-green-600",
          bg: "bg-green-100",
          icon: <FaCheckCircle />,
          label: "Success",
        };
      }

      return {
        color: "text-red-600",
        bg: "bg-red-100",
        icon: <FaTimesCircle />,
        label: "Failed",
      };
    }

    return {
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: <FaClock />,
      label: "Running",
    };
  };

  const status = getStatusStyle();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold text-gray-800">
          {workflow.name}
        </h2>

        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full ${status.bg} ${status.color}`}
        >
          {status.icon}

          <span className="font-medium">
            {status.label}
          </span>
        </div>

      </div>

      {/* Workflow Info */}
      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-2 text-gray-600">

          <FaCodeBranch />

          <span>
            Branch: {workflow.head_branch}
          </span>

        </div>

        <p className="text-gray-600">
          <span className="font-semibold">
            Status:
          </span>{" "}
          {workflow.status}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">
            Started:
          </span>{" "}
          {new Date(workflow.created_at).toLocaleString()}
        </p>

      </div>

    </div>
  );
};

export default WorkflowCard;