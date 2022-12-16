const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cocktailinfo');

const cocktailSchema = new mongoose.Schema({
  name: String,
  glass: String,
  category: String,
  ingredients: Array,
  garnish: String,
  preparation: String,
  favorite: String,
});
let Cocktails = mongoose.model('Cocktail', cocktailSchema);

getRandomCocktail = () => {
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

toggleFavorite = (cocktailId) => {
  const togglePromise = new Promise(function (resolve, reject) {
    Cocktails.findByIdAndUpdate(
      cocktailId,
      { favorite: true },
      {new: true}
    )
    .then(result => {
      resolve(result);
    })
    .catch(err => {
      reject(err);
    })
  })
  return togglePromise;
}

getFavorites = () => {
  const favoritesPromise = new Promise(function (resolve, reject) {
    Cocktails.find({ favorite: true })
    .then(results => {
      resolve(results);
    })
    .catch(err => {
      reject(err);
    })
  })
  return favoritesPromise;
}

module.exports.getRandomCocktail = getRandomCocktail;
module.exports.toggleFavorite = toggleFavorite;
module.exports.getFavorites = getFavorites;