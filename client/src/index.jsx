import React from 'react';
import ReactDOM from 'react-dom';
import Mongoose from 'mongoose';
import Cocktail from './components/Cocktail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCocktail: []
    }
    this.render = this.render.bind(this);
  }

  render() {
    getRandomCocktail();
    return (<div>
      <h1>Random Cocktail Recipe Generator</h1>
      <Cocktail cocktail={this.state.currentCocktail}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));