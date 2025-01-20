import {createContext, useEffect, useState} from 'react'

export const GlobalContext=createContext()
export const GlobalContextProvider=({children})=>{

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('User');
        return storedUser ? JSON.parse(storedUser) : null;
      });
    
      useEffect(() => {
        if (user) {
          localStorage.setItem('User', JSON.stringify(user));
        } else {
          localStorage.removeItem('User');
        }
      }, [user]); 
    
    return (<GlobalContext.Provider value={{user,setUser}}>{children}</GlobalContext.Provider>)
}