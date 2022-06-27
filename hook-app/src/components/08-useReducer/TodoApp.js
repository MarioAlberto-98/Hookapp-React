import React, {useEffect, useReducer} from 'react'
import {todoReducer} from './todoReducer';
import {useForm} from '../../hooks/useForm';
import './styles.css';



/*
const initialState = [{
    id: new Date().getTime(),
    desc:'Aprender React',
    done: false
}]; 
*/

const init = () =>{
    
    return JSON.parse(localStorage.getItem('todos')) || [];
    
    /*return [{
        id: new Date().getTime(),
        desc:'Aprender React',
        done: false
    }];*/
}




export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer,[] /* initialState */ ,init );

  const [{description}, handleInputChange, reset]= useForm ({
    description:''
  });  

  //console.log(description);



  //console.log(todos);

  useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]);


  const handleSubmit=(e)=>{
    e.preventDefault();// Evita que cargue la pagina
    if(description.trim().length<=1){ //Verifica que se haya escrito algo en el input
        return;
    }
    const newTodo={ //Nuevo objecto con nuevos datos que se anadira 
        id: new Date().getTime(),
        desc:description,
        done:false
    };
    const action={
        type:'add',  //Se crea el tipo de accion
        payload:newTodo //Se une el viejo objeto con el nuevo 
    };
    dispatch(action);// Lo que hace el dispatch es mandar ese dato a el useRecucer
    reset();// Esta linea hace referencia a que cuando envias un dato se limpie el input
  }





  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr />
        <div className="row">
            <div className="col-6">
            <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) =>(
                    <li 
                        key={todo.id}
                        className="list-group-item"
                    >
                        <p className="text-center"> {i + 1}.  { todo.desc } </p>
                        <button
                            className="btn btn-danger"
                        >
                            Borrar
                        </button>
                    </li>

                ))
            }
            </ul>
            </div>
            <div className="col-6">
                <h4>Agregar TODO</h4>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                    />

                    <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
