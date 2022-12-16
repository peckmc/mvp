import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import $ from 'jquery';
import Cocktail from './components/Cocktail.jsx';
import Favorites from './components/Favorites.jsx';
import Layout from './components/Layout.jsx';

function App() {
  const [cocktail, setCocktail] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cocktailLoading, setCocktailLoading] = useState(true);
  const [favoritesLoading, setFavoritesLoading] = useState(true);

  function addToFavorites(cocktailId) {
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://localhost:1128/cocktails',
      data: JSON.stringify({"id":cocktailId}),
      success: function(cocktailData) {
        setFavorites([...favorites, cocktailData]);
      }
    });
  }

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:1128/cocktails',
      success: function(cocktailData) {
        setCocktail(cocktailData);
        setCocktailLoading(false);
      }
    });
  },[]);

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:1128/favs',
      success: function(favoritesData) {
        setFavorites(favoritesData);
        setFavoritesLoading(false);
      }
    });
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={!cocktailLoading && <Cocktail cocktail={cocktail} addToFavorites={addToFavorites}/>} />
          <Route path="/favorites" element={!favoritesLoading && <Favorites favoritesData={favorites}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));