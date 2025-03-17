import { useState,useEffect } from 'react'


function CounterApp(){
    const[count, setCount] = useState(function(){
        // Get saved count from local storage
        const savedCount = localStorage.getItem("count");

        return savedCount ? parseInt(savedCount, 10) : 0;


    });
    // useEffect to update local storage whenever count changes
        useEffect(function(){

            localStorage.setItem("count", count)// Save the current count to local storage

        },[count])// Runs only when count changes
  
    function Increase(){
      setCount(count + 1);
    }
    function Decrease(){
      setCount(count - 1);
    }
  
    return(<div>
      <h1>{count}</h1>
      <button onClick = {Increase}>Increase Counter</button>
      <button onClick = {Decrease}>Decrease Counter</button>
    </div>)
  }
  export default CounterApp ;