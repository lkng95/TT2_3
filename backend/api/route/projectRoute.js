
const logger = require('pine/lib/logger');
const express = require("express");
const projectController = require('../controller/projectController')

const router = express.Router();

router.get("/projects", async(req, res) => {
    console.log(`get projects`);
    projectController.getAllProjects().then(data => res.json(data));
    
});

module.exports = router;