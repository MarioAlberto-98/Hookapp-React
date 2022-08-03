import { useState } from "react";
import { UserContext } from "./UserContext";

//En UserProvider se almacena toda la informacion 
/*
const user={
    id:123,
    name:'Mario Alberto',
    email:'marioalbert2298@gmail.com'
}
*/

export const UserProvider=({children})=>{
    
    const [user,setUser] = useState();

    return(
       

        //<UserContext.Provider value={{hola:'Mundo', user:user}}>
       <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}