import React from "react";

const Input = (props) => {
  const values = (e) => {
    props.valueSensing(e.target.value);
  };
  //const valueUpdate = () => {};
  return (
    <div>
      <label>
        <input type="text" placeholder="todo" onChange={(e) => values(e)} />
      </label>
    </div>
  );
};

export default Input;
