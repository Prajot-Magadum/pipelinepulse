const express = require("express");

const router = express.Router();

const {
  createPipeline,
  getPipelines,
  getPipelineById,
  updatePipeline,
  deletePipeline,
} = require("../controllers/pipelinescontroller");

const {
  protect,
} = require("../middleware/authMiddleware");


// CREATE + GET ALL
router
  .route("/")
  .post(protect, createPipeline)
  .get(protect, getPipelines);


// GET ONE + UPDATE + DELETE
router
  .route("/:id")
  .get(protect, getPipelineById)
  .put(protect, updatePipeline)
  .delete(protect, deletePipeline);


module.exports = router;