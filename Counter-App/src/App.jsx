import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev)=>prev+1);
  };

  const decrement = () => {
   setCount((prev)=>{
    if(prev > 0){
      return prev - 1;
    }
    return 0;
   })
  };

  const reset = () => {
    setCount(0);
  };

  const incrementByFive = () => {
    setCount((prev) => prev + 5);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={increment}>Increment + </button>
        <br />
        <button onClick={decrement} disabled={count===0}> Decrement - </button>
        <br />
        <button onClick={reset}> Reset </button>
        <br />
        <button onClick={incrementByFive}> Increment by 5 </button>
      </div>
    </>
  );
}

export default App;
