<<<<<<< HEAD
import React, { Component } from 'react';

class EditFishForm extends Component {
  handleChange = e => {
    // in console, the inputs field are updated as we type, however it won't show updates on screen
    // because we are updating the fishes on state
    // We need to pass a callback from App to Inventory then to EditFishForm in order to update the fishes state

=======
import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    updatedFish: PropTypes.func,
  };

  handleChange = e => {
    console.log(e.currentTarget.name);
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    // update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
<<<<<<< HEAD
    };

=======
      // name: e.currentTarget.value // use object square brackets looking for what were changed
    };
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
<<<<<<< HEAD
    const { name, price, status, desc, image } = this.props.fish;

    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={name} />
        <input type="number" name="price" onChange={this.handleChange} value={price} />
        <select name="status" onChange={this.handleChange} value={status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" onChange={this.handleChange} value={desc} />
        <input name="image" onChange={this.handleChange} value={image} />
=======
    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
        <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
        <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available"> Fresh! </option>
          <option value="unavailable"> Sold Out! </option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
        <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
      </div>
    );
  }
}

export default EditFishForm;
<<<<<<< HEAD
=======

// value={this.props.fish.name}
// state lives in the input where users can update the value of the input
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
