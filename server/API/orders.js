const express = require("express")
const orderRouter = express.Router()
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// All Orders - WORKING
orderRouter.get("/", async (req, res, next) => {
  try {
    const orders = await prisma.orders.findMany();
    res.send(orders);
  } catch (ex) {
    next(ex);
  }
});

// One user order - WORKING
orderRouter.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userOrder = await prisma.orders.findMany({
      where: {
        usersId: parseInt(userId), //comparing data from API to the data the user sends in
      },
    });
    const products = await Promise.all(userOrder.map(order=>{
      return prisma.products.findUnique({
        where: {
          id: parseInt(order.productsId),
        },
      });
    }))
    // console.log(products);
    res.send(userOrder);
  } catch (ex) {
    next(ex);
  }
});

// User can add to order - WORKING
orderRouter.post("/", async (req, res, next) => {
  try {
    const {productsId, usersId} = req.body
    const newOrder = await prisma.orders.create({
      data: {
        productsId: parseInt(productsId),
        usersId: parseInt(usersId),
        purchaseDate: new Date(),
        total: 0
      }
    })
    // console.log(newOrder)
    res.send(newOrder)
  } catch (err) {
    console.error(err.message);
  }
})

// User can delete from order
orderRouter.delete("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const deleteOrder = await prisma.orders.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.send(deleteOrder);
  } catch (ex) {
    next(ex);
  }
});

module.exports = orderRouter