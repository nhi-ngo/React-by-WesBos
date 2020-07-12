<<<<<<< HEAD
import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
=======
import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  };

>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
<<<<<<< HEAD

=======
    const transitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    // Make sure the fish is loaded before we continue
    if (!fish) return null;

    if (!isAvailable) {
<<<<<<< HEAD
      return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available!</li>;
    }

    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
=======
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>&times; </button>
          </span>
        </li>
      </CSSTransition>
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
<<<<<<< HEAD

=======
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
<<<<<<< HEAD
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>TOTAL: {formatPrice(total)}</strong>
=======
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total: <strong> {formatPrice(total)} </strong>
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
        </div>
      </div>
    );
  }
}

export default Order;
<<<<<<< HEAD
=======

// <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
// Why not this.props.removeFromOrder(this.props.index)????
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
