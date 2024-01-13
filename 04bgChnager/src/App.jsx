import { useState } from "react";

function App() {
  const [color,setColor]=useState("white")

  return (
    <>
      <div className={`bg-${color} h-screen`}>
        <div className="absolute bottom-10 right-0 left-0 flex justify-center rounded-lg px-2">
          <div className="bg-white flex justify-center items-center gap-6 shadow-lg rounded-3xl p-2 px-4">
            <button onClick={()=>setColor('red-700')}  className="bg-red-700 shadow-lg rounded-lg p-1">
              Red
            </button>
            <button onClick={()=>setColor("green-700")} className="bg-green-700 shadow-lg rounded-lg p-1">
              Green
            </button>
            <button onClick={()=>setColor("blue-700")}  className="bg-blue-700 shadow-lg rounded-lg p-1">
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
