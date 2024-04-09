const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL ||
    "postgresql://alisonhager:bitnet5cry@localhost:5433/tchotchke_db" // This should be filled in with your personal computer credentials in your .env file
);
const express = require("express");
const app = express();
app.use(express.json());
const dummyCart = require("./dummyData/dummyCart");
const cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  res.send("TODO - this will be our application");
});

app.get("/products", async (req, res, next) => {
  try {
    const products = await prisma.products.findMany();
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

app.get("/products/:id", async (req, res, next) => {
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

app.post("/products", async (req, res, next) => {
  try {
    const { id, name, desc, imgURL, price, category_name } = req.body;
    if (!name || !desc || !imgURL || !price || !category_name) {
      return res.status(400).send("Missing required fields");
    }
    const newProduct = await prisma.products.create({
      data: {
        id,
        name,
        desc,
        imgURL,
        price,
        category_name,
      },
    });
    res.send(newProduct);
  } catch (ex) {
    console.error("Error adding new product");
    next(ex);
  }
});

app.get("/users", async (req, res, next) => {
  try {
    const allUsers = await prisma.users.findMany();
    res.status(200).json(allUsers);
  } catch (ex) {
    next(ex);
  }
});

app.post("/users/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("Missing required fields");
    }

    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password
      },
    });
    console.log(newUser);
    res.status(201).send(newUser);

  } catch (error) {
    if (error.code === 'P2002' && error.meta.target.includes('email')){
      return res.status(400).send("Email already exists");
    }
    console.error('Error registering user:', error);
    res.status(500).send('Internal Server Error');
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
app.post("/users/login", (req, res) => {
  
});
=======
app.get("/users/login", (req, res) => {});
>>>>>>> de82ad9 (Added initial implementation of login route)
=======
// app.post("/users/login", (req, res) => {});
>>>>>>> 50a17b5 (created dummyData folder)

app.get("/orders", async (req, res, next) => {
  try {
    const orders = await prisma.orders.findMany();
    res.json(orders);
  } catch (ex) {
    next(ex);
  }
});

app.get("/cart", async (req, res, next) => {
  try {
    // const cart = await prisma.cart.findMany();
    res.send(dummyCart);
  } catch (ex) {
    next(ex);
  }
});

app.post("/cart/add", async (req, res, next) => {
  try {
    const { productId, userId } = req.body;
    if (!productId || !userId) {
      return res.status(400).send("Invalid request data to cart");
    }
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return res.send(404).send("Product not found");
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const cartItem = await prisma.cartItem.create({
      data: {
        productId: productId,
        userId: userId,
        },
      });
    res.status(201).json(cartItem);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/cart/remove", async (req, res, next) => {
  try {
    const { productId, userId } = req.body;
    if (!productId || !userId){
      return res.status(400).send('Invalid request data to remove product from cart')
    }

    const user = await prisma.user.findUnique({
      where: {id: userId}
    });
    if(!user){
      return res.status(404).send('User not found');
    }

    const cartItem = await prisma.cartItem.findFirst({
      where:{
        userId: userId,
        productId: productId
      }
    });
    if(!cartItem){
      return res.status(404).send('Product not found in user cart');
    }

    await prisma.cart.delete({
      where: {
        id: cartItem.id
      },
    });
    res.status(200).send('Product removed from user cart');
  } catch (ex) {
    next(ex);
  }
});

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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`REST API server ready at http://localhost:${PORT}`);
});
