// const pg = require("pg");
// const client = new pg.Client(
//   process.env.DATABASE_URL ||
//   "postgresql://alisonhager:bitnet5cry@localhost:5432/tchotchke_db"
// );

// import { PrismaClient } from '@prisma/client'
const {PrismaClient} = require('@prisma/client');
const express = require('express');

const prisma = new PrismaClient()
const app = express();
app.use(express.json())

// // const path = require("path");
// const dummyProducts = require("./dummyProducts");
// const dummyUsers = require("./dummyUsers");
// const dummyOrder = require("./dummyOrder");

// // TODO - check findUserByToken function
// const isLoggedIn = async (req, res, next) => {
//   try {
//     req.user = await findUserByToken(req.headers.authorization);
//     next();
//   } catch (ex) {
//     next(ex);
//   }
// };


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
    })
    res.send(product)
  } catch (ex) {
    next(ex);
  }
});

// not sure what this does?
// app.patch("/api/products/:id", async (req, res, next) => {
//   try {
//     res.send(dummyProducts);
//   } catch (ex) {
//     next(ex);
//   }
// });

app.post("/api/products", async (req, res, next) => {
  try{
    const { name, desc, imgURL, price, category_name, rating } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        desc,
        imgURL,
        price,
        category_name,
        rating
      }
    });
    res.send(newProduct);
  } catch(ex){
    console.error('Error adding new product:');
    next(ex);
  }
})

// USER
// GET Existing Users - TESTED
//TODO - connect sql and create fetchUsers()
app.get("/api/users", async (req, res, next) => {
  try {
    const users = await prisma.users.findMany();
    console.log(users);
    res.send(users);
  } catch (ex) {
    next(ex);
  }
});

// POST Authenticate Login
app.post("/api/users/login", async (req, res, next) => {
  try {
    res.send(await authenticate(req.body));
  } catch (ex) {
    next(ex);
  }
});

// POST Authenticate Register
app.post("/api/users/register", async (req, res, next) => {
  try {
    res.send(await register(req.body));
  } catch (ex) {
    next(ex);
  }
});

//CART - not sure if this is right...
app.get("/api/cart", async (req, res, next) => {
  try {
    res.send(dummyCart);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/api/cart/:cartId", async (req, res, next) => {
  try {
    res.send(dummyCart);
  } catch (ex) {
    next(ex);
  }
});

//ORDER
app.get("/api/order", async (req, res, next) => {
  try {
    res.send(dummyOrder);
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
