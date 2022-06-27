import React,{useState, useEffect} from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForm=()=>{
    const [formState, setFormState] = useState({
        name:'',
        email:''
    });
    const {name, email}=formState; // Destructuracion

    useEffect(() =>{
        console.log('Hey!');
    },[]);

    useEffect(()=>{
        console.log('formState cambio');
    },[formState]);

    useEffect(()=>{
        console.log('email cambio');
    },[email]);


    const handleInputChange=({target})=>{
       // console.log(e.target);
       // console.log(e.target.name);
       // console.log(e.target.value);
        setFormState({
            ...formState,   //Se destructura el formState por si acaso hay propiedades que no estan cambiando
            [target.name]:target.value  //Se computa el target.name, 
            //Se hace referencia a que la propiedad [target.name] o el nombre de esta propieda venga en el objeto
            //De target.value, es lo que se quiere 
        });
    
    }


    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
            />

            <input
            type="text"
            name="email"
            className="form-control"
            placeholder="email@gamil.com"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
            />
            </div>
            {name === '123' && <Message/>}
        </>
    )
}