import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQESTWXYZabcdefghijklmnopqrstwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+=-{}[]";
    // console.log(length);
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  const copyPasswordClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3 text-xl">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none  w-full py-1 mpx-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordClipboard}
            className="bg-gray-300 text-red-700 shrink-0"
          >
            copy
          </button>
        </div>{" "}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer bg-black"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="cursor-pointer">Length : {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
