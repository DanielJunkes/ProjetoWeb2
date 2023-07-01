import React, { createContext, useState } from "react";

export const Contexto = createContext();

export const ProviderValores = ({children}) =>{
    const [rota, setRota] = useState("")
    const [teste, setTeste] = useState("")
    const [usuario, setUsuario] = useState("")
    return(
    <Contexto.Provider value={{rota, setRota, teste, setTeste, usuario, setUsuario}}>
        {children}
    </Contexto.Provider>
)}
 