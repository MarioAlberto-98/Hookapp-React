 import React from 'react';
 import ReactDOM from 'react-dom';
 import{BrowserRouter} from "react-router-dom"
 import { MainApp } from './components/10-useContext/MainApp';
//import { TodoApp } from './components/09-useReducer/TodoApp';
// //import { MemoHook } from './components/06-memos/MemoHook';
// //import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// //import { Layout } from './components/05-useLayoutEffect/Layout';
// //import { Memorize } from './components/06-memos/Memorize';
// //import { CounterApp } from './components/01-useState/CounterApp';
// //import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// //import { SimpleForm } from './components/02-useEffect/SimpleForm';
// //import { HookApp } from './HookApp';
// //import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks'
// //import { FocusScreen } from './components/04-useRef/FocusScreen';
// //import { RealExampleRefs } from './components/04-useRef/RealExampleRefs';
// import {Padre} from './components/07-tarea-memo/Padre'
//import './components/08-useReducer/intro-reducer'

/*
 ReactDOM.render(
   <TodoApp />,
   document.getElementById('root')
 );
*/ 
 /*connect your app to the browser's URL */
 /* <BrowserRouter>   Da acceso a todos los hijos de la informacion que provee el padre*/
 /*<MainApp/>    Hijo*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MainApp/> 
  </BrowserRouter>

)


