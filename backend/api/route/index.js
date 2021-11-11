const { Router } = require("express");
const expenseRouter = require("./expenseRoute");
const projectRouter = require("./projectRoute");

const router = Router();

router.use("/", expenseRouter);

router.use("/projects", projectRouter);

module.exports = router;

