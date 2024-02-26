const express = require("express");

// controller
const employerController = require("../controllers/employerController");

const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", employerController.register);
router.post("/login", employerController.login);
router.get("/logout", employerController.logout);

router.use(auth.authenticate);
router.use(auth.isEmployer);

router.get("/findemployer", employerController.findEmployer);

module.exports = router;
