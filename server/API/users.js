const express = require("express")
const userRouter = express.Router()
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

userRouter.get("/", async (req, res, next) => {
  try {
    const allUsers = await prisma.users.findMany();
    res.status(200).json(allUsers);
  } catch (ex) {
    next(ex);
  }
});

userRouter.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    console.log(newUser);
    res.status(201).send(newUser);
  } catch (ex) {
    next(ex);
  }
});

// userRouter.get("/login", (req, res) => {});

module.exports = userRouter