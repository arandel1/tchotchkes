const express = require("express");
const userRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const defaultJWT = "shhh";
const JWTsecret = process.env.JWT || defaultJWT;

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
    const hashedPassword = await bcrypt.hash(password, 5);
    const register = await prisma.users.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });
    const token = JWT.sign(register.id, defaultJWT);
    register.token = token;
    res.status(201).send(register);
  } catch (ex) {
    next(ex);
  }
});

userRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.users.findUnique({
      where: {
        email: req.body.email,
      },
    });
    const passwordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValid || !user) {
      res.status(401).send("Not Authorized");
    } else {
      const token = JWT.sign(user.id, defaultJWT);
      user.token = token;
      res.status(201).send(user);
    }
  } catch (ex) {
    next(ex);
  }
});

module.exports = userRouter;