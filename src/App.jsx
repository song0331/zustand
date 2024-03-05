import { useState } from "react";
import "./App.css";
import { useCountStore } from "./store/useCountStore";
import { useRef } from "react";
import usePersist from "./store/usePersist";

function App() {
  const { number, plus, minus } = usePersist();
  const { count, inc, dec, update, str, action } = useCountStore();
  const [num, setNum] = useState(1000);
  const inputRef = useRef(null);
  // console.log(action());

  const handleUpdate = () => {
    console.log(inputRef.current.value);
    update(inputRef.current.value);
  };

  return (
    <>
      <h1>Persist 미들웨어: {number}</h1>
      <button onClick={plus}>Increment</button>
      <button onClick={minus}>Decrement</button>
      <div>{str}</div>
      <input ref={inputRef} type="text" name="data" id="data" />
      <button onClick={handleUpdate} type="button">
        변경
      </button>
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
