import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const ProviderRotas = ({children}) =>{
    const [rota, setRota] = useState("")
    return(
    <Contexto.Provider value={{rota, setRota}}>
        {children}
    </Contexto.Provider>
)
}