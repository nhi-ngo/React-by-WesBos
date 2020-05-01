import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from './sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  static propTypes = {
    match: PropTypes.object,
  };

  componentDidMount() {
    // When the component mounts, we are updating state which
    // in turn triggering componentDidUpdate()

    const { params } = this.props.match;
    // First reinstate our local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. Take a copy of the existing state
    const { fishes } = { ...this.state };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    // this.setState({ fishes: fishes});
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const { fishes } = { ...this.state };
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set the state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. Take a copy of the state
    const { fishes } = { ...this.state };
    // 2. Update the state (Since we are mirroring fishes state to Firebase, Firebase will update when the removed item is set to null)
    fishes[key] = null;
    // 3. Set the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of the state
    const { order } = { ...this.state };
    // 2. Either add to the order, or update the number in our order
    // if the order already exists, increment it by 1 otherwise return 1 for new order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. Take a copy of the state
    const { order } = { ...this.state };
    // 2. Remove that item from order
    // We are not mirroring to firebase so we can use delete
    delete order[key];
    // 3. Set the state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"></Header>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
            ))}
          </ul>
        </div>
        {/* !!Passing the whole state!! We don't want to use this since we want to make sure what was passed in */}
        {/* <Order {...this.state}></Order> */}
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}></Order>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          storeId={this.props.match.params.storeId}
        ></Inventory>
      </div>
    );
  }
}

export default App;

// index={key} allows access to key
// object lookup
// this.state .fishes.fish1 ; this.state.fishes.fish2 ....
// turn to this.state.fishes[key]
