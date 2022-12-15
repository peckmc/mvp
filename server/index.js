const express = require('express');
const app = express();
const path = require('path');
const port = 1128;
const getRandomCocktail = require('../database/index.js')

app.use(express.static('./client/dist'));
app.use(express.json());

app.get('/cocktails', (req, res) => {
  return getRandomCocktail()
  .then(result => {
    res.send(result[0]);
  })
  .catch(err => {
    console.log(err);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})