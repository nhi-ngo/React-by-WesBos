import React, { Component } from 'react';

class EditFishForm extends Component {
  handleChange = e => {
    // in console, the inputs field are updated as we type, however it won't show updates on screen
    // because we are updating the fishes on state
    // We need to pass a callback from App to Inventory then to EditFishForm in order to update the fishes state

    // update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
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
      </div>
    );
  }
}

export default EditFishForm;
