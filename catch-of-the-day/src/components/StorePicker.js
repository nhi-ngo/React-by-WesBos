import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object,
  };

  goToStore = e => {
    e.preventDefault();
    // get the text from the input
    const storeName = this.myInput.current.value;
    // change the page to /store/whatever-users-entered without reloading the page
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;

// Refs allow us to reference an actual DOM node
// Refs return an object with a 'current' property

// how to access to Router component?
