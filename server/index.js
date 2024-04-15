// 1. setup
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
// 2. Route
// Connect to the database
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();
// Calling Routers
const apiRouter = require("./API/indexAPI");
app.use("/tchotchke", apiRouter);

// 3. Start server
const init = async () => {
  console.log("connecting to database");
  await prisma.$connect();
  console.log("connected to database");
};

init()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`REST API server ready at http://localhost:${PORT}`);
});
