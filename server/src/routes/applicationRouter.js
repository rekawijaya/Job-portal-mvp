const express = require("express");

const applicationController = require("../controllers/applicationController");

const auth = require("../middlewares/auth");

const router = express.Router();

router.use(auth.authenticate);
router.use(auth.isUser);

router.post("/createapplication", applicationController.createApplication);
router.get("/findapplication", applicationController.findApplication);

module.exports = router;
