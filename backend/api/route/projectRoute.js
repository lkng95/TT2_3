const logger = require("pine/lib/logger");
const express = require("express");
const projectController = require('../controller/projectController')
const router = express.Router();


router.get("/all", async (req, res) => {
  console.log(`get projects`);
  projectController.getAllProjects().then((data) => res.json(data));
});

router.get("/all/:projectId", async (req, res) => {
    let { projectId } = req.params;
    projectId = String(projectId);
    console.log(`get projects ${projectId}`);
    
    projectController.getProject(projectId).then((data) => res.json(data));
  });
  



module.exports = router;
