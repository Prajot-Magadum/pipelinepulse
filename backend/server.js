const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const pipelineRoutes = require("./routes/pipelineRoutes");
const buildRoutes = require("./routes/buildRoutes");
const githubRoutes = require("./routes/githubRoutes");

const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware");



connectDB();

const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/pipelines", pipelineRoutes);

app.use("/api/builds", buildRoutes);

app.use("/api/github", githubRoutes);


// HOME ROUTE
app.get("/", (req, res) => {
  res.send("PipelinePulse API Running");
});


// ERROR MIDDLEWARE
app.use(notFound);

app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});