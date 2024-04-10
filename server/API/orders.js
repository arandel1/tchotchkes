const express = require("express")
const orderRouter = express.Router()
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

orderRouter.get("/", async (req, res, next) => {
  try {
    const orders = await prisma.orders.findMany();
    res.send(orders);
  } catch (ex) {
    next(ex);
  }
});

orderRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const userCart = await prisma.orders.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.send(userCart);
  } catch (ex) {
    next(ex);
  }
});

orderRouter.post("/:id/add", async (req, res, next) => {
  try {
    const { id } = req.params;
    const addToCart = await prisma.orders.create({
      data: {
        productsId: parseInt(id),
        usersId: parseInt(id)
      },
    });
    res.send(addToCart);
  } catch (ex) {
    next(ex);
  }
});

orderRouter.delete("/:id/remove", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCartItem = await prisma.cart.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.send(deleteCartItem);
  } catch (ex) {
    next(ex);
  }
});

module.exports = orderRouter