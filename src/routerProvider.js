import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const ProviderValores = ({children}) =>{
    const [rota, setRota] = useState("")
    const [teste, setTeste] = useState("")
    return(
    <Contexto.Provider value={{rota, setRota, teste, setTeste}}>
        {children}
    </Contexto.Provider>
)}
 