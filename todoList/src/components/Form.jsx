import React, { useState } from "react";
import AddItems from "./AddItems";

function Form() {
  
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setItems([item, ...items]);
    setItem(""); // Clear the input field after submitting
  }

  return (
    <div>
      <h1 className="text-center">{item}</h1>
      <div className="flex justify-center mt-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-4"
        >
          <input
            type="text"
            required
            placeholder="Add Item"
            value={item} // Controlled input, using the current state value
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="bg-green-700 cursor-pointer" type="submit">
            Submit
          </button>
        </form>
      </div>
      <AddItems data={items} setData={setItems} />
    </div>
  );
}

export default Form;
