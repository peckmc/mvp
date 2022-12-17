import React from 'react';
import { useNavigate } from 'react-router-dom';

const Favorites = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Favorites</h1>
      <button onClick={() => navigate('/')}>Return to Home</button>
      <ul>
        {props.favoritesData.map((item) => {
          return <li>{item.name}</li>
        })}
      </ul>
    </div>
  );
};

export default Favorites;