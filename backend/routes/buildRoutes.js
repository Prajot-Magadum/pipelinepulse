const express = require("express");

const router = express.Router();

const {
  createBuild,
  getBuilds,
  getBuildById,
} = require("../controllers/buildscontroller");

const {
  protect,
} = require("../middleware/authMiddleware");


// CREATE + GET ALL
router
  .route("/")
  .post(protect, createBuild)
  .get(protect, getBuilds);


// GET SINGLE
router
  .route("/:id")
  .get(protect, getBuildById);


module.exports = router;