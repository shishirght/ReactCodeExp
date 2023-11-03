import { useState } from "react";

function Counter(){

let [x,setterFunction] = useState(0);

let increamentCounterFunction = () => {  
    setterFunction(x+1);
};

return( 
<div>
    <h1>Counter: {x}</h1>
    <button onClick={increamentCounterFunction}>+</button>
</div>);
}
export default Counter;