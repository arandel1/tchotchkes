const express = require("express");
const apiRouter = express.Router();

apiRouter.use("/products", require("./products"));
module.exports = apiRouter;

apiRouter.use("/users", require("./users"));
module.exports = apiRouter;

apiRouter.use("/orders", require("./orders"));
module.exports = apiRouter;
console.log("something dumb");
