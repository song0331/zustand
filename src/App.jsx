import "./App.css";
import countStore from "./store";

function App() {
  const n = countStore((aa) => aa.count);
  const plus = countStore((aa) => aa.inc);
  const minus = countStore((aa) => aa.dec);

  const handlePlus = () => plus();
  const handleMinus = () => minus();

  return (
    <>
      <h2>ZUSTAND 연습</h2>
      <button type="button" onClick={handlePlus}>
        +
      </button>
      <span>{n}</span>
      <button type="button" onClick={handleMinus}>
        -
      </button>
    </>
  );
}

export default App;
