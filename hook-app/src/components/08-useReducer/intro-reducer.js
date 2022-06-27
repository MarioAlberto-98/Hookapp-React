//Lo que se hara sera agregar el objeto initialState con newTodo mediante un reducer


const initialState =[{
    id:1,
    todo:'Comprar pan',
    done: false
}];

const todoReducer  = (state = initialState, action)=>{
    if(action?.type==='agregar'){ // el  if(action?.type==='agregar') pregunta si hay una accion de algun tipo, si lo hay procede a hacer el if, sino lo rechaza
        return [...state,action.payload];// Se unen los dos objectos con el spreetiteretor
    }
    return state;
}
let todos=todoReducer();

const newTodo={//Se crea una accion que le dira como unir los dos objetos
    id:2,
    todo:'Comprar leche',
    done:false
}

const agregarTodoAction = { // Se crea un objeto nuevo para pasar los nuevos datos mediante la accion del reducer.
    type:'agregar',
    payload:newTodo //payload hace referencia a cargar el objecto
}
todos = todoReducer(todos, agregarTodoAction);


console.log(todos);