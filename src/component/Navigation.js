import React, { Component } from 'react';
import './Navigation.css';
import CarValue from './CarValue';

class Navigation extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { count } = this.props;
    return (
      <div className="navigation">
        <h1>Store</h1>
        <img
          className="img1"
          // eslint-disable-next-line no-undef
          src={require('../assets/product_image_placeholder.jpg')}
          alt="shoppingcar"
        />
        <CarValue count={count} />
      </div>
    );
  }
}
export default Navigation;
