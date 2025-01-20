import {createContext, useEffect, useState} from 'react'

export const GlobalContext=createContext()
export const GlobalContextProvider=({children})=>{

const[ user,setUser]=useState(null)

// useEffect(()=>{console.log("user",user);
// },[user])
    return (<GlobalContext.Provider value={{user,setUser}}>{children}</GlobalContext.Provider>)
}