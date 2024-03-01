import { useState } from "react";
import { useCountStore } from "../store/useCountStore";

export default function Banana() {
  const { count, inc, dec } = useCountStore();
  const [num, setNum] = useState(1000);

  return (
    <>
      <h2>Banana</h2>
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
