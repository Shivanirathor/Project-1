import React from "react";

const child =()=>{
    return(
        <p>Child Component</p>
    )
}

function FunctionBasedComponents(){
    return(
        <div><child/>
            Function Based Components
        </div>
    )
}

export default FunctionBasedComponents;