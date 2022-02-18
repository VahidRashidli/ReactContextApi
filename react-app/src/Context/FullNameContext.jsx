import {useState, createContext } from "react";

export const FullNameContext=createContext();

function FullNameContextProvider(props){
    const [name,setName]=useState(()=>"Vahid");
    const [surname,setSurname]=useState(()=>"Rashidli");
    function UpdateFullName({name,surname}) {
        setName((prev)=>prev=name)
        setSurname((prev)=>prev=surname)
    }
    return (
        <FullNameContext.Provider value={{UpdateFullName,name,surname}}>
            {props.children}
        </FullNameContext.Provider>
    );
}

export default FullNameContextProvider;