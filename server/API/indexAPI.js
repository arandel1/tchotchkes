const express = require("express")
const apiRouter = express.Router()

// apiRouter.use("/", jwt({secret: "shhhhhhared-secret", algorithms: ['RS256']}));

apiRouter.use("/products", require("./products"))
module.exports = apiRouter

apiRouter.use("/users", require("./users"))
module.exports = apiRouter

apiRouter.use("/orders", require("./orders"))
module.exports = apiRouter