const express = require('express');
const app = express();
const port = 3000;
const getRandomCocktail = require('../database/index.js')

app.use(express.static('../client/dist'));

app.get('/', (req, res) => {
  getRandomCocktail()
  .then(result => {
    res.send(result);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})