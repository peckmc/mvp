import React from 'react';

const Favorites = (props) => {

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {props.favoritesData.map((item) => {
          return <li>{item.name}</li>
        })}
      </ul>
    </div>
  );
};

export default Favorites;