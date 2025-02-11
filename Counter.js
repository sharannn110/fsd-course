import React,{useState} from "react";
function Counter(){
    const[count,setcount]=useState(0);
    return(
        <div>
            <p> you clicked{count}times</p>
            <button onClick={()=>setcount(count + 1)}> clickme </button>
        </div>
    );
}
export default Counter;