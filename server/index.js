const express = require('express');
const app = express();
const path = require('path');
const port = 1128;
const { getRandomCocktail, toggleFavorite, getFavorites } = require('../database/index.js');

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

app.post('/cocktails', (req, res) => {
  toggleFavorite(req.body.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/favs', (req, res) => {
  return getFavorites()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  })
})

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})