// AddItems.js
import React, { useState, useEffect } from "react";

export default function AddItems({ data }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Update the state when the "data" prop changes
    setItems(() => [...items, data]);
  }, [data]);

  return (
    <div>
      {items.map((value, index) => (
        <div className=" flex justify-center items-center" key={index}>{value}</div>
      ))}
    </div>
  );
}
