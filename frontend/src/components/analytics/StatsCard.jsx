const StatsCard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      
      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            {value}
          </h2>
        </div>

        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatsCard;