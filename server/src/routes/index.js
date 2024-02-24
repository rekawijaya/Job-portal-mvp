const express = require("express");
const userRouter = require("./userRouter");
const employerRouter = require("./employerRouter");

const router = express.Router();

router.get("/", (req, res) => {
     res.send("Hello World!");
});

router.use("/api/users", userRouter);
router.use("/api/employers", employerRouter);

module.exports = router;
