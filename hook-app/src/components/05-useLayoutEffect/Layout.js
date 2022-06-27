import React, { useLayoutEffect, useState,useRef } from 'react';
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import { useCounterTwo } from '../../hooks/useCounterTwo';
export const Layout = () => {

const {counter, increment}= useCounterTwo(1);  

const { data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); 
//Destructuracion y se hace la toma de decisiones
//Si data es falso, selecciona el array numero cero 
//Ya que unicia siendo null


const { quote} = !!data && data[0];   
const pTag=useRef();
const [boxSize, setBoxSize]=useState({});
useLayoutEffect(()=>{
    setBoxSize(pTag.current.getBoundingClientRect()); 
    console.log('hey');
},[quote])
//console.log(loading);
//console.log(author, quote);
    return(
        <div>
            <h1>Layout Effects</h1>
            <hr />
                <blockquote className="blockquote text-right">
                <p className="mb-0"
                   ref={pTag}
                >
                    {quote}
                </p>
                </blockquote>
                <pre>
                    {JSON.stringify(boxSize,null,3)}
                </pre>


                <button className="btn btn-primary"
                onClick={increment}>
                Siguiente quote
                </button>
        </div>
    )
}