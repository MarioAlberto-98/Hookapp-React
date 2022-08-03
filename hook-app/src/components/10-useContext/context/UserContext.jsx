import { createContext } from 'react';

// Se crea este useContext por dos objetivos
//1.- Que nos permita saber como luce la informacion que luce ahi
//2.- Para que nuestro hook busque el contexto y definir el proveedor
export const UserContext = createContext();
