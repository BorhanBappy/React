import ResizePanel from "react-resize-panel";

export default function Display() {
    


  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600">
      <div className="text-center text-black bg-blue-800  flex items-center">
        <button className="text-black bg-white px-1 shadow-lg font-medium rounded-sm border border-black text-lg text-center" onClick={displayChange}>
          h
        </button>
        <button className="text-black bg-white px-1 shadow-lg font-medium rounded-sm text-lg text-center border border-black">
          v
        </button>
      </div>

      <div className="text-center bg-red-700 text-black  flex items-center">
        <button className="text-black bg-white px-1 shadow-lg font-medium rounded-sm border border-black text-lg text-center" ></button>
          h
        
        <button className="text-black bg-white px-1 shadow-lg font-medium rounded-sm text-lg text-center border border-black">
          v
        </button>
      </div>

    </div>
  );
}
