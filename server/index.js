const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_ice_cream_shop_db');

const express = require('express');
const app = express();
const path = require('path');
const dummyProducts = require('./dummyProducts');
const dummyUsers = require('./dummyUsers');

// TODO - check findUserByToken function
const isLoggedIn = async(req, res, next)=>{
  try{
    req.user = await findUserByToken(req.headers.authorization);
    next();
  }
  catch(ex){
    next(ex);
  }
};

// TODO - clarify what this does, update __dirname
// const assetsFolder = path.join(__dirname, '../client/dist/assets');
// app.use('/assets', express.static(assetsFolder));

// TODO - update __dirname
app.get('/', (req, res)=>{
  const rootPath = path.join(__dirname, '../client/dist/index.html');
  res.sendFile(rootPath);
});

// GET Products - TESTED
// TODO - connect to sql
app.get('/api/products', async(req, res, next)=>{
  try {
    // const SQL = `
    // SELECT *
    // FROM products
    // `;
    // const response = await client.query(SQL);
    res.send(dummyProducts);
  }
  catch(ex){
    next(ex);
  }
});

// GET Existing Users - TESTED
//TODO - connect sql and create fetchUsers()
app.get('/api/users', async(req, res, next)=>{
  try{
    res.send(dummyUsers);
  }
  catch(ex){
    next(ex);
  }
});

// POST Authenticate Login
app.post('/api/auth/login', async(req, res, next)=>{
  try{
    res.send(await authenticate(req.body));
  }
  catch(ex){
    next(ex);
  }
});

// POST Authenticate Register
app.post('/api/auth/register', async(req, res, next)=>{
  try{
    res.send(await register(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/auth/me', async(req, res, next)=>{
  try{
    res.send(req.user);
  }
  catch(ex){
    next(ex);
  }
});

const init = async()=>{
  console.log('connecting to database');
  await client.connect();
  console.log('connected to database');
}
init();


const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}`);
});