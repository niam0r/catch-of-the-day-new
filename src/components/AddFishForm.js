import React from 'react';

class AddFishForm extends React.Component {
  render() {
    return (
      <form action="" className="fish-edit">
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="text" placeholder="Price" />
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <input name="desc" type="text" placeholder="Desc" />
        <textarea name="image" type="text" placeholder="Image" ></textarea>
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm;
