# React + Vite

```javascript
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);

  // const addNumber = (setter) => {
  //   setter((pre) => pre + 1);
  // };

  // const subtractNumber = (setter) => {
  //   setter((pre) => pre - 1);
  // };
  return (
    <>
      <div className="ml-4">
        <h1>{count}</h1>
        <button
          className="border border-black bg-slate-400 rounded px-2"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
        <button
          className="border border-black bg-slate-400 rounded px-2"
          onClick={() => setCount(count - 1)}
        >
          Subtract
        </button>
      </div>

      <div className="ml-4 text-center p-4">
        {console.log(`text-[${count1}rem]`)}
        <h1 className={`text-[-20px]`}>{count1}</h1>
        <h1 className={`text-[${count1 * 10}px] p-4`}>{count1}</h1>

        {/* <h1 style={{ fontSize: `${count1}px` }}>{count1}</h1> */}
        <button
          className="border border-black bg-slate-400 rounded px-2"
          onClick={() => setCount1(count1 + 1)}
        >
          Add
        </button>
        <button
          className="border border-black bg-slate-400 rounded px-2"
          onClick={() => setCount1(count1 - 1)}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default App;
```
