const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {// action: le dice al reducer como quiere que cambie las cosas 
    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

//Para anadir cosas, se crea una funcion o 
//objecto que le dira como hacer ello, ejemplo: la funcion con el objeto AddtodoActin.



const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer( todos, addTodoAction );


console.log({state: todos})





