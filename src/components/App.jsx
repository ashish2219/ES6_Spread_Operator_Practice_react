import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [addItem, setAddItem] = useState([]);

  function updateItem(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  function handleClick(event) {
    setAddItem((prevValue) => {
      return [...prevValue, item];
    });

    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="item" onChange={updateItem} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addItem.map((todoItem, index) => {
            return <li key={index}>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
