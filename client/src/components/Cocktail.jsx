import React from 'react';

const Cocktail = (props) => (
  <div>
    <hr/>
    <h1>{props.cocktail.name}</h1>
    <div>Category: {props.cocktail.category}</div>
    <div>Glass Type: {props.cocktail.glass}</div>
    <h2>Ingredients</h2>
    <ul>
      {props.cocktail.ingredients.map((item) => {
        if(item.unit === 'cl') {
          return <li>{item.amount * 10} ml {item.ingredient} {item.special}</li>;
        }
        else{
          return <li>{item.amount} {item.unit} {item.ingredient} {item.special}</li>;
        }
      })}
    </ul>
    <h2>Steps</h2>
    <ol>
      {props.cocktail.preparation.split('. ').map((step) => (
        <li>{step}</li>
      ))}
      {props.cocktail.hasOwnProperty('garnish') ? <li>Garnish with {props.cocktail.garnish} </li> : <div></div>}
    </ol>
    <hr/>
    <h4>Reload the page for a new drink.</h4>
  </div>
);

export default Cocktail;