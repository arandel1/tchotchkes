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
    const register = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    console.log(newUser);
    res.status(201).send(register);
  } catch (ex) {
    next(ex);
  }
});

userRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await prisma.users.findUnique({
      where: {
        email: email,
        password: password
      },
    });
    // console.log(login);
    res.status(201).send(login);
  } catch (ex) {
    next(ex);
  }
});

module.exports = userRouter