import { useState, useContext } from "react";
import {MyContext} from '../contextAPi/nameStore';
import { Switch } from "@mui/material";

function Increment (){
    const [result, setResult] = useState(0);
    const {name, currentTheme, setCurrentTheme} = useContext(MyContext);

    return (
        <>
        <h1>Increment & Decrement {name} {currentTheme}</h1>
        <p>Result : {result}</p>
        <button onClick={() => setResult(result+1)}> + </button>
        <button onClick={() => setResult(result-1)}> - </button>
        <br/>
        Change theme color: <Switch onChange={()=>setCurrentTheme('Light')} />
        <hr/>
        </>
    );
};

export default Increment;