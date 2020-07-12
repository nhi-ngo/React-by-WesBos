<<<<<<< HEAD
import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  render() {
    const { desc, image, name, price, status } = this.props.details;
=======
import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  // Either create the function separate or inline is fine.
  // handleClick = () => {
  //   this.props.addToOrder(this.props.index);
  // };

  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    addToOrder: PropTypes.func,
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
<<<<<<< HEAD
        <button button type="submit" disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
=======
        <button type="submit" disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
<<<<<<< HEAD

// In App component, addToOrder(key) accepts key as its argument. How can we access 'key' in Fish component?
// Solution: passe the 'key' property down from App to Fish component via props.
// Since 'key' is unique, we have to use a different property name other than 'key' in order to access 'key'.
=======
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
