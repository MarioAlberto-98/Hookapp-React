import React,{useState} from 'react'
import './counter.css'
export const CounterApp = () => {
    //const [counter, setCounter] = useState(0);
    const [state, setState] = useState({ //Se crea el useState, con un objeto lleno de datos
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40,
    });
    const {counter1, counter2, counter3, counter4}= state; //

    return(
        <>
        <h1> Counter1 {counter1}</h1>
        <h1> Counter2 {counter2}</h1>
        <h1> Counter3 {counter3}</h1>
        <h1> Counter4 {counter4}</h1>
        <nr/>
        <button className="btn btn-primary"
        onClick={()=>{
            setState({
            ...state,// State se puede desestructurar,no importa cuantas propiedades tenga el state, se esparse
            counter1:counter1+1// Despues solo se sobreescribe caounter 1
            //O sea, solo al presionar el boton counete uno, hara la operacion
            })      
        }}>  
            +1
        </button>
        </>

    )
}