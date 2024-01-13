import React, { useState } from "react";
import Additems from "./Additems";

function Form() {
  const [items, setItems] = useState(); // Initialize as an array

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new item to the array
    setItems( event.target[0].value)
  };

  console.log(items);

  return (
    <div>
      <div className="flex justify-center mt-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-4"
        >
          <input
            type="text"
            placeholder="Add Item"
            onChange={event.target.value}
          />
          <button className="bg-green-700 cursor-pointer" type="submit">
            Submit
          </button>
        </form>
        
      </div>
      <Additems data={items}/>
    </div>
  );
}

export default Form;
