import React from 'react';

function Pras(props){
    return(
        <div>
    <h1>Welcome to PrasInfo,This is Function Component {props.Name}</h1>
    {props.children}
    </div>
    )  
}

export default Pras;