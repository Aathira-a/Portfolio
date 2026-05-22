import React, { useState,useEffect} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [multi,setMulti] = useState(2);
  useEffect(() =>{
    console.log("Count changed:" , count);
  },[count]);

  function increment() {
    if (count < 20) 
        setCount(count + multi*multi);
  }

  function decrement() {
    if (count > 0) 
        setCount(count - multi*multi);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Card container */}
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-96 p-6 flex flex-col items-center">
        
        {/* Card header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Counter Card</h2>

        {/* Counter display */}
        <div className="text-6xl font-bold text-indigo-600 mb-6">{count}</div>

        {/* Action buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Decrement
          </button>
        </div>

        {/* Reset button */}
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition" >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
