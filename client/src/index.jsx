import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Cocktail from './components/Cocktail.jsx';

function App() {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:1128/cocktails',
      success: function(cocktailData) {
        console.log(cocktailData);
        setCocktail(cocktailData);
      }
    });
   },[]);

  return (
    <div>
    <h1>Random Cocktail Recipe Generator</h1>
    {cocktail && cocktail.name && cocktail.ingredients ? <Cocktail cocktail={cocktail}/> : 'Loading'}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));