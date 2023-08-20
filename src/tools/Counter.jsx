import React, {useState} from 'react';

const Counter = function () {
    const [counter,setCounter] = useState(0)
    function increment (){
        setCounter(counter +1)
    }
    function Decrement (){
        setCounter(counter -1)
    }
    function Blu () {
        setCounter(counter *2)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Blu}>Blu</button>
        </div>
    );
};
export default Counter;
















