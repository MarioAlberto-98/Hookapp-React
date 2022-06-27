//Es una funcion que recibe un estado mediante un arreglo 
// Se pasa mediante propiedades y checa si el tipo de accion es 'add' con el switch
//Lo que hace es unir dos objetos con el spread iterator o bien unir el estado actual con la nueva accion
//Por default si no pasa el switch  
export const todoReducer = ( state=[] , action ) => {
    switch (action.type){
        case 'add':
            return [...state, action.payload];
        default:
            return state;
    }
}