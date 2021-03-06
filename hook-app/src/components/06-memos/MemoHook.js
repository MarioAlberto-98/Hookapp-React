import React, { useState, useMemo } from 'react'
import '../02-useEffect/effects.css';
import {useCounterTwo} from '../../hooks/useCounterTwo';
import { procesoPesado } from '../../helpers/procesoPesado';
//import {Small} from './Small';

export const MemoHook = () => {
   const {counter, increment}=useCounterTwo(90); 
   const [show, setShow] =useState(true); 
   
  
   const memoProcesoPesado = useMemo(()=> procesoPesado(counter),[counter]);
  
  
  
  
   return (
    <div>
        <h1>MemoHook</h1>
        <h3>Counter: <small>{ counter }</small></h3>
        <hr />
        <p>{memoProcesoPesado}</p>
        <button className="btn btn-primary"
        onClick={increment}>  
            +1
        </button>
        <button 
            className="btn btn-outline-primary ml-3"
            onClick={()=>{
                setShow(!show);
            }}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}
