import React from 'react';

const cocktail = (props) => (
  <div>
    <h3>Here's Your Cocktail!</h3>
    <h4>Reload the page for a new drink.</h4>
    {props.cocktail}
  </div>
);

export default Cocktail;