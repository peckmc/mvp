const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const cocktailSchema = new mongoose.Schema({});
let Cocktails = mongoose.model('Cocktail', cocktailSchema);

module.exports = getRandomCocktail = () => {
  const cocktailPromise = new Promise(function (resolve, reject) {
    Cocktails.aggregate([ { $sample: { size: 1 } } ])
    .then(recipe => {
      resolve(recipe);
    })
    .catch(err => {
      console.log('error getting cocktail', err);
    })
  })
  return cocktailPromise;
}