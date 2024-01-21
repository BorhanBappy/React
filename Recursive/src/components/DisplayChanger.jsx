import React from "react";

export default function DisplayChanger() {
  return (
    <div className="flex justify-between items-center h-screen w-screen border-2 border-black">
      <div className="flex justify-center items-center bg-red-900 h-full w-full border-2 border-black">
        <div className=" flex justify-center items-center h-full w-full bg-green-700 border-2 border-black">
          <button>h</button>
          <button>v</button>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full bg-yellow-700 border-2 border-black">
          <div className="flex justify-center items-center h-full w-full bg-green-700 border-2 border-black">
            <button>h</button>
            <button>v</button>
          </div>
          <div className="flex justify-center items-center h-full w-full bg-yellow-700 border-2 border-black">
            <button>h</button>
            <button>v</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-700 h-full w-full border-2 border-black">
        <div className=" flex justify-center items-center h-full w-full bg-green-700 border-2 border-black">
          <button>h</button>
          <button>v</button>
        </div>
        <div className="flex justify-center items-center h-full w-full bg-gray-700 border-2 border-black">
          <button>h</button>
          <button>v</button>
        </div>
      </div>
    </div>
  );
}
