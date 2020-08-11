import React, { Component } from 'react';
import Phone from './Phone';
import './Phones.css';
import PropTypes from 'prop-types';

class Phones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iPhoneList: [],
      huaWeiList: [],
    };
  }

  async componentDidMount() {
    const result = await fetch('http://localhost:3000/products', {
      method: 'GET',
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return Promise.reject();
    });
    const iPhoneList = [];
    const huaWeiList = [];
    result.forEach((element) => {
      if (element.category === 'iPhone') {
        iPhoneList.push(element);
      } else if (element.category === 'HUAWEI') {
        huaWeiList.push(element);
      }
    });
    this.setState({
      iPhoneList: iPhoneList,
      huaWeiList: huaWeiList,
    });
  }
  render() {
    const { iPhoneList, huaWeiList } = this.state;
    // eslint-disable-next-line react/prop-types
    const handleAddToCart = this.props.handleAddToCart;
    return (
      <div className="Phones">
        <div className="iPhone">
          <h2 className="PhoneType">
            {iPhoneList.length > 0 ? iPhoneList[0].category : ''}
          </h2>
          {iPhoneList.map((iPhone, index) => (
            <Phone
              key={index}
              id={index}
              price={iPhone.price}
              name={iPhone.name}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="huaWei">
          <h2 className="PhoneType">
            {huaWeiList.length > 0 ? huaWeiList[0].category : ''}
          </h2>
          {huaWeiList.map((huaWei, index) => (
            <Phone
              key={index}
              id={index}
              price={huaWei.price}
              name={huaWei.name}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}
Phones.protoTypes = {
  handleAddToCart: PropTypes.function,
};
export default Phones;
