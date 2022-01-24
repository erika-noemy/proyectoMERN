import React from "react";
export default function Saludar (props){
   
    const { userInfo, saludarFn} = props; //asignacion por destructuring
    const {nombre= "Anonimo"} =userInfo
    const {edad}=userInfo;
    console.log(userInfo);
    return(
        <div>
            <button onClick={()=>
                {saludarFn(nombre,edad)}}> Saludar
            </button>
        </div>
    )
}