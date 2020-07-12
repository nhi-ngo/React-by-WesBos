import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  render() {
    const { desc, image, name, price, status } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button button type="submit" disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;

// In App component, addToOrder(key) accepts key as its argument. How can we access 'key' in Fish component?
// Solution: passe the 'key' property down from App to Fish component via props.
// Since 'key' is unique, we have to use a different property name other than 'key' in order to access 'key'.
