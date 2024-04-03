// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");
const express = require("express");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/api/products", async (req, res, next) => {
  try {
    const products = await prisma.products.findMany();
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.products.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.send(product);
  } catch (ex) {
    next(ex);
  }
});

// app.post("/api/products", async (req, res, next) => {
//   const uuid = uuidv4();
//   try {
//     const { id, name, desc, imgURL, price, category_name } = req.body;
//     if (!name || !desc || !imgURL || !price || !category_name) {
//       return res.status(400).send("Missing required fields");
//     }
//     const newProduct = await prisma.products.create({
//       data: {
//         id,
//         name,
//         desc,
//         imgURL,
//         price,
//         category_name,
//       },
//     });
//     res.send(newProduct);
//   } catch (ex) {
//     console.error("Error adding new product:");
//     next(ex);
//   }
// });

app.get("/api/users", async (req, res, next) => {
  try {
    const users = await prisma.users.findMany();
    res.send(users);
  } catch (ex) {
    next(ex);
  }
});

//creating a new user
app.post("/api/users", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
        isAdmin: false
      }
    });
    console.log(newUser);
    res.send(newUser);
  } catch (ex) {
    next(ex);
  }
});

app.get("/login", (req, res) => {});

app.get("/api/order", async (req, res, next) => {
  try {
    const orders = await prisma.orders.findMany();
    res.send(orders);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/cart", async (req, res, next) => {
  try {
    const cart = await prisma.cart.findMany();
    res.send(cart);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/api/cart/:id", async (req, res, next) => {
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

const init = async () => {
  console.log("connecting to database");
  // await client.connect();
  console.log("connected to database");
};
init();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
