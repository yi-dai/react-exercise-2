import React, { Component } from 'react';
import './App.scss';
import Navigation from './component/Navigation';
import Phones from './component/Phones';

class App extends Component {
  state = {
    count: 0,
  };
  handleAddToCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
    //console.log(this.state.count);
  };

  render() {
    return (
      <main className="app">
        <Navigation count={this.state.count} />
        <Phones handleAddToCart={this.handleAddToCart} />
      </main>
    );
  }
}

export default App;
