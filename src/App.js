import './App.css';
import {useState} from 'react';

function App() {

//   let count = 0;


const [count, setCount] = useState(0);
const [color, setColor] = useState("")

let handleChanges = () =>{
  setCount(count+1)
  setColor("changed")
};

  return (
    <>
    <h1 className={color}>Counter</h1>
    <p>{count}</p>

    {/* <button onClick={()=>{setCount(count+1);}}>click me</button> */}
    <button onClick={handleChanges}>click me</button>
    </>
    );
}

export default App;
