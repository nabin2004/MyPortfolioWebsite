import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const add = ()=>{
    setCount(count +1 )
  }
  const sub = ()=>{
    if(count > 0){
    setCount(count - 1 )
    }
  }

  return (
    <div>
  <button onClick={sub}>-</button>
  <span>{count}</span>
  <button onClick={add}>+</button>
    {count !== 0 ? <h1>The {count} is {count%2 === 0 ? "Even": "Odd"}</h1>: null}
  </div>
  );
}

export default App;
