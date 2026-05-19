const Pipeline = require("../models/Pipeline");


// CREATE PIPELINE
const createPipeline = async (req, res) => {

  try {

    const { name, repository, status } = req.body;

    const pipeline = await Pipeline.create({
      name,
      repository,
      status,
      createdBy: req.user._id,
    });

    res.status(201).json(pipeline);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET ALL PIPELINES
const getPipelines = async (req, res) => {

  try {

    const pipelines = await Pipeline.find({
      createdBy: req.user._id,
    });

    res.status(200).json(pipelines);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET SINGLE PIPELINE
const getPipelineById = async (req, res) => {

  try {

    const pipeline = await Pipeline.findById(
      req.params.id
    );

    if (!pipeline) {
      return res.status(404).json({
        message: "Pipeline not found",
      });
    }

    res.status(200).json(pipeline);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// UPDATE PIPELINE
const updatePipeline = async (req, res) => {

  try {

    const pipeline = await Pipeline.findById(
      req.params.id
    );

    if (!pipeline) {
      return res.status(404).json({
        message: "Pipeline not found",
      });
    }

    pipeline.name =
      req.body.name || pipeline.name;

    pipeline.repository =
      req.body.repository || pipeline.repository;

    pipeline.status =
      req.body.status || pipeline.status;

    const updatedPipeline =
      await pipeline.save();

    res.status(200).json(updatedPipeline);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// DELETE PIPELINE
const deletePipeline = async (req, res) => {

  try {

    const pipeline = await Pipeline.findById(
      req.params.id
    );

    if (!pipeline) {
      return res.status(404).json({
        message: "Pipeline not found",
      });
    }

    await pipeline.deleteOne();

    res.status(200).json({
      message: "Pipeline deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  createPipeline,
  getPipelines,
  getPipelineById,
  updatePipeline,
  deletePipeline,
};