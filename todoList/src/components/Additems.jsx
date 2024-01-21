import React, { useState } from "react";
 
export default function AddItems({ data, setData }) {
  const newData = [...data];

  const handleRemove = (index) => {
    // Create a copy of the data array
    // Remove the item at the specified index
    newData.splice(index, 1);
    // Update the state with the new data
    setData([...newData]);
  };

  return (
    <div>
      {data.map((value, index) => (
        <div className="flex justify-center items-center" key={index}>
          {value}
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
