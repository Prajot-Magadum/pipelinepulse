const Build = require("../models/Build");


// CREATE BUILD
const createBuild = async (req, res) => {

  try {

    const {
      pipeline,
      status,
      duration,
      logs,
    } = req.body;

    const build = await Build.create({
      pipeline,
      status,
      duration,
      logs,
    });

    res.status(201).json(build);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET ALL BUILDS
const getBuilds = async (req, res) => {

  try {

    const builds = await Build.find()
      .populate("pipeline");

    res.status(200).json(builds);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET SINGLE BUILD
const getBuildById = async (req, res) => {

  try {

    const build = await Build.findById(
      req.params.id
    ).populate("pipeline");

    if (!build) {
      return res.status(404).json({
        message: "Build not found",
      });
    }

    res.status(200).json(build);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  createBuild,
  getBuilds,
  getBuildById,
};