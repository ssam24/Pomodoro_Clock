import React from 'react';

function SessionLength (props){
    function increaseLength(){
        if(props.sessionLength === 60){
            return; 
        }
        props.increaseLength(); 
    }
    function decreaseLength(){
        if(props.sessionLength === 1){
            return; 
        }
        props.decreaseLength(); 
    }

    return(
        <section>
             <h4 className="title">Session Length</h4>

             <section className="interval-container">
            <button onClick={decreaseLength}>Down</button>
            <p className="interval-length">{props.sessionLength}</p>
            <button onClick={increaseLength}>Up</button>
            
             </section>
        </section>
        
    )
}
export default SessionLength
