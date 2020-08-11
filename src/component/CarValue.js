import React, { Component } from 'react';
import './CarValue.css';

class CarValue extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { count } = this.props;
    return <p className="carValue">{count}</p>;
  }
}
export default CarValue;
