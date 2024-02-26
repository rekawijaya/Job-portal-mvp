const express = require("express");

// controller
const jobController = require("../controllers/jobController");

const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/findjob", jobController.findJob);
router.get("/findjobById/:jobId", jobController.findJobById);

router.use(auth.authenticate);
router.use(auth.isEmployer);

router.post("/createjob", jobController.createJob);
router.put("/updatejob/:jobId", jobController.updateJob);
router.delete("/deletejob/:jobId", jobController.deleteJob);

module.exports = router;
