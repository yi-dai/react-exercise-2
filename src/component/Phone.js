import React, { Component } from 'react';
import './Phone.css';
import PropTypes from 'prop-types';

class Phone extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { price, name, handleAddToCart } = this.props;
    return (
      <div className="Phones">
        <h3 className="PhoneName">{name}</h3>
        <img
          className="img2"
          // eslint-disable-next-line no-undef
          src={require('../assets/product_image_placeholder.png')}
          alt="placeholder"
        />
        <div className="shopping">
          <p className="price">{price}</p>
          <button className="addToCart" onClick={handleAddToCart}>
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

Phone.protoTypes = {
  price: PropTypes.string,
  name: PropTypes.string,
};
export default Phone;
