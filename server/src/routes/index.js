const express = require("express");
const userRouter = require("./userRouter");
const employerRouter = require("./employerRouter");
const jobRouter = require("./jobRouter");
const applicationRouter = require("./applicationRouter");

const router = express.Router();

router.get("/", (req, res) => {
     res.send("Hello World!");
});

router.use("/api/users", userRouter);
router.use("/api/employers", employerRouter);
router.use("/api/jobs", jobRouter);
router.use("/api/applications", applicationRouter);

module.exports = router;
