const express = require("express");
// controller
const userControler = require("../controllers/userController");
const informationController = require("../controllers/informationController");
const educationController = require("../controllers/educationController");
const experienceController = require("../controllers/experienceController");
const documentController = require("../controllers/documentController");

const auth = require("../middlewares/auth");
const upload = require("../utilities/uploadCloudinary");

const router = express.Router();

router.post("/register", userControler.register);
router.post("/login", userControler.login);
router.get("/logout", userControler.logout);

router.use(auth.authenticate);
router.use(auth.isUser);

// user-information
router.post("/information", informationController.createInformation);
router.get("/information", informationController.findInformation);
router.put("/information", informationController.updateInformation);

// user-education
router.post("/education", educationController.createEducation);
router.get("/education", educationController.findEducation);
router.get(
     "/education/:educationId",
     educationController.findEducationById
);
router.put("/education/:educationId", educationController.updateEducation);
router.delete(
     "/education/:educationId",
     educationController.deleteEducation
);

// user-experience
router.post("/experience", experienceController.createExperience);
router.get("/experience", experienceController.findExperience);
router.get(
     "/experience/:experienceId",
     experienceController.findExperienceById
);
router.put(
     "/experience/:experienceId",
     experienceController.updateExperience
);
router.delete(
     "/experience/:experienceId",
     experienceController.deleteExperience
);

// user-document
router.post(
     "/document",
     upload.single("documentImage"),
     documentController.createDocument
);

router.get("/document", documentController.findDocument);
router.get("/document/:documentId", documentController.findDocumentById);
router.put(
     "/document/:documentId",
     upload.single("documentImage"),
     documentController.updateDocument
);
router.delete("/document/:documentId", documentController.deleteDocument);

module.exports = router;
