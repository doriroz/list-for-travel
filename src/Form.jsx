import React, { useState } from "react";

const Form = (props) => {
  const [description, setDescription] = useState("");
  const [quentity, setQuentity] = useState("1");

  const changeDescriptionHandler = (event) => {
    // console.log(event.target.value);
    setDescription(event.target.value);
  };

  const addItemHandler = () => {
    let i = 2;
    const newItem = {
      id: ++i,
      description: description,
      quantity: quentity,
      packed: false,
    };

    props.addItem(newItem);
    setDescription("");
    setQuentity("");
  };

  const changeQuentityHandler = (event) => {
    // console.log(event.target.value);
    setQuentity(event.target.value);
  };

  return (
    <div className="add-form">
      What do you need for your trip 🌎 ?{" "}
      <select value={quentity} onChange={changeQuentityHandler}>
        {Array.from({ length: 20 }, (_, i) => {
          return i + 1;
        }).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        placeholder="Item..."
        value={description}
        onChange={changeDescriptionHandler}
      />
      <button onClick={addItemHandler}>Add</button>
    </div>
  );
};

export default Form;
