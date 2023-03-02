import { useState } from "react";
import Links from "../../components/Links";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter === 10) {
      return;
    }
    setCounter((count) => count + 1);
  };

  const decrement = () => {
    if (counter === 0) {
      return;
    }
    setCounter((count) => count - 1);
  };

  return (
    <>
      <Links />
      <main>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={increment} disabled={counter === 10}>
          Increment
        </button>
        <button onClick={decrement} disabled={counter === 0}>
          Decrement
        </button>
      </main>
    </>
  );
};

export default Counter;
