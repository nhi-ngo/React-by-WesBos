import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    console.log(this.myInput);
    // 3. Change the page to /store/whatever-they-entered
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
