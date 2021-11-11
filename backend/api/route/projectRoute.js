
const logger = require('pine/lib/logger');
const express = require("express");
const projectControler = require('../controllers/projectController')

const router = express.Router();

router.get("/projects", async(req, res) => {
    console.log(`get projects`);
    atmController.getAccounts().then(data => res.json(data));
    
});