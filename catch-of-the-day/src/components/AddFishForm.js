<<<<<<< HEAD
/* eslint-disable lines-between-class-members */
import React from 'react';
=======
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

<<<<<<< HEAD
  createFish = e => {
    e.preventDefault();

=======
  static propTypes = {
    addFish: PropTypes.func,
  };

  createFish = e => {
    // 1. stop the form from submitting
    e.preventDefault();
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
<<<<<<< HEAD

    this.props.addFish(fish);

    // reset the form
    e.currentTarget.reset();
=======
    this.props.addFish(fish);
    // refresh the form
    e.currentTarget.reset();

>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
<<<<<<< HEAD
        <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc" />
        <input name="image" ref={this.imageRef} placeholder="Image" />
=======
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
