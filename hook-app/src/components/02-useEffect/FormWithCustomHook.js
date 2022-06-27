// import React,{useState} from 'react'
import './effects.css';
import {useForm} from '../../hooks/useForm'
import { useEffect } from 'react';

export const FormWithCustomHook=()=>{
    const[formValues, handleInputChange]=useForm({
        names:'',
        email:'',
        password:''
    });

    const {name, email, password}=formValues;
    
    useEffect(()=>{
        console.log('EMAIL CAMBIO')
    },[email]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);
    }



    /*
    const [formState, setFormState] = useState({
        name:'',
        email:'',
        password:''
    });
    const {name, email, password}=formState; // Destructuracion

    

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
    */






    return (
        <form>
            <h1>FormWithCustomHook</h1>
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
            </div>

            <div className="form-group">
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

            <div className="form-group">
            <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*******"
            value={password}
            onChange={handleInputChange}
            />
            </div>
        <button type="submit" className="btn btn-primary">
            Guardar
        </button>
        </form>
    )
}