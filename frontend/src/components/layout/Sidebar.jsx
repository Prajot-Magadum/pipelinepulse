import {
  FaGithub,
  FaChartBar,
  FaCodeBranch,
} from "react-icons/fa";

import {
  MdDashboard,
} from "react-icons/md";

import {
  FiLogOut,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white flex flex-col shadow-lg">

      {/* Logo */}
      <div className="p-6 border-b border-gray-700">

        <h1 className="text-2xl font-bold">
          PipelinePulse
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          CI/CD Dashboard
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3">

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition">

          <MdDashboard size={22} />

          <span>Dashboard</span>

        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition">

          <FaGithub size={20} />

          <span>Repositories</span>

        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition">

          <FaCodeBranch size={20} />

          <span>Workflows</span>

        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition">

          <FaChartBar size={20} />

          <span>Analytics</span>

        </button>

      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition p-3 rounded-xl"
        >

          <FiLogOut size={20} />

          Logout

        </button>

      </div>

    </div>
  );
};

export default Sidebar;