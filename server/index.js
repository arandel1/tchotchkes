// 1. setup
const express = require("express");
const app = express();
const stripe = require('stripe')('sk_test_51P5rYeKu8FwGD361lRKFaQP156EfR5se1bI3tC6i4SfdPjaWyzYmuKyjCLe6bJ1YJKptCgTZy5zCzdiyw7S1mucb00sWQWDt3o');
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

//Stripe
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1P5sPVKu8FwGD361NrrHcisz',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:${PORT}?success=true`,
    cancel_url: `http://localhost:${PORT}?canceled=true`,
  });

  res.redirect(303, session.url);
});

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
