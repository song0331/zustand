import { useState } from "react";
import "./App.css";
import { useCountStore } from "./store/useCountStore";

function App() {
  const { count, inc, dec } = useCountStore();
  const [num, setNum] = useState(1000);

  return (
    <>
      <h2>App</h2>
      <div>
        <button type="button" onClick={inc}>
          +
        </button>
        <span>{count}</span>
        <button type="button" onClick={dec}>
          -
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +
        </button>
        <span> {num}</span>
        <button
          type="button"
          onClick={() => {
            setNum(num - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
