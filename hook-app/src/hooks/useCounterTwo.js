import {useState} from 'react';
export const useCounterTwo =(initialState = 10) => {
    const [counter , setCounter] = useState(initialState);

    const reset=()=>{
        setCounter(initialState);
    }
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () =>{
        setCounter(counter);
    }
    return{
        counter,
        increment,
        decrement,
        reset
    };

} 