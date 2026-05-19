import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    success: 12,
    failed: 2,
  },
  {
    day: "Tue",
    success: 18,
    failed: 1,
  },
  {
    day: "Wed",
    success: 10,
    failed: 4,
  },
  {
    day: "Thu",
    success: 22,
    failed: 3,
  },
  {
    day: "Fri",
    success: 28,
    failed: 2,
  },
];

const PipelineChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Pipeline Analytics
        </h2>

        <p className="text-gray-500 mt-1">
          Weekly CI/CD workflow performance
        </p>
      </div>

      <div className="w-full h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="success"
              stroke="#22c55e"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="failed"
              stroke="#ef4444"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default PipelineChart;