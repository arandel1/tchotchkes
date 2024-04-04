// ROUTES

const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL ||
    "postgresql://allisonrandel:Weare234@localhost:5432/tchotchke_db" // This should be filled in with your personal computer credentials in your .env file
);

const express = require("express");
const app = express();
const path = require("path");
const dummyProducts = require("./dummyProducts");
const dummyUsers = require("./dummyUsers");
const dummyOrder = require("./dummyOrder");
const cors = require("cors");

app.use(cors());

// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// TODO - check findUserByToken function
const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await findUserByToken(req.headers.authorization);
    next();
  } catch (ex) {
    next(ex);
  }
};

// TODO - clarify what this does, update __dirname
// const assetsFolder = path.join(__dirname, '../client/dist/assets');
// app.use('/assets', express.static(assetsFolder));

// TODO - update __dirname
app.get("/", (req, res) => {
  const rootPath = path.join(__dirname, "../client/dist/index.html");
  res.sendFile(rootPath);
});

// PRODUCTS
// GET Products - TESTED
// TODO - connect to sql
app.get("/api/products", async (req, res, next) => {
  try {
    const products = await prisma.products.findMany();
    // console.log(products);
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/products/:productId", async (req, res, next) => {
  try {
    const SQL = `
    SELECT *
    FROM products
    `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

app.patch("/api/products/:productId", async (req, res, next) => {
  try {
    // const SQL = `
    // SELECT *
    // FROM products
    // `;
    // const response = await client.query(SQL);
    res.send(dummyProducts);
  } catch (ex) {
    next(ex);
  }
});

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
    // const SQL = `
    // SELECT *
    // FROM cart
    // `;
    // const response = await client.query(SQL);
    res.send(dummyCart);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/api/cart/:cartId", async (req, res, next) => {
  try {
    // const SQL = `
    // SELECT *
    // FROM cart
    // `;
    // const response = await client.query(SQL);
    res.send(dummyCart);
  } catch (ex) {
    next(ex);
  }
});

//ORDER
app.get("/api/order", async (req, res, next) => {
  try {
    // const SQL = `
    // SELECT *
    // FROM order
    // `;
    // const response = await client.query(SQL);
    res.send(dummyOrder);
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  console.log("connecting to database");
  await client.connect();
  console.log("connected to database");
};
init();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
