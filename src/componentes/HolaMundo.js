import React from "react";
export default function HolaMundo() { // lo ideal es llamar a la funcion del mismo nombre que el componente, pero puede tener cualquier nombre
    //esta funcion siempre debe empezar por mayuscula
    //ejemplo de añadir un fragemnt y no un div
    return(
        <>  
            <h1> Hola Mundo</h1>
            <h2> Erika</h2>
        </>
    );
}


export function AdiosMundo () {  // solo puyede haber un export default
    return (
        <div> 
            <h3> Adios </h3>
        </div>
    );
}