import { FaGithub, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          PipelinePulse
        </h1>

        <p className="text-sm text-gray-500">
          DevOps Monitoring Dashboard
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-black transition">

          <FaBell size={20} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>

        </button>

        {/* GitHub Profile */}
        <div className="flex items-center gap-3">

          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="GitHub"
            className="w-10 h-10 rounded-full border"
          />

          <div>
            <p className="font-semibold text-gray-700">
              GitHub User
            </p>

            <p className="text-xs text-gray-500">
              Developer
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;