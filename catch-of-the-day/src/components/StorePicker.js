import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

<<<<<<< HEAD
  goToStore = e => {
    e.preventDefault();
    // get the text from the input
    const storeName = this.myInput.current.value;
    // change the page to /store/whatever-users-entered without reloading the page
=======
  static propTypes = {
    history: PropTypes.object,
  };

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
<<<<<<< HEAD
        <h2>Please Enter A Store</h2>
        <input type="text" required ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store </button>
=======
        <h2>Please enter a store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store -></button>
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
      </form>
    );
  }
}

export default StorePicker;
<<<<<<< HEAD

// Refs allow us to reference an actual DOM node
// Refs return an object with a 'current' property

// how to access to Router component?
=======
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
