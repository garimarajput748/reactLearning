import { useState, useContext } from "react";
import {MyContext} from '../contextAPi/nameStore'

function Table (){
    const [num, setNum] = useState('');
    const { name, fname, currentTheme } = useContext(MyContext);
    const renderTable  = (num) => {
        const table = [];
        for(let i=1; i<=10; i++){
            table[i] = <div>{num} x {i} = {num * i}</div>;
        }
        return table;
    };
    

    return (
        <>
        <h1>Table {name} {fname} {currentTheme}</h1>
        <input placeholder="enter number" type="number" name="num" onChange={(e) => setNum(e.target.value)}/>
        {num &&renderTable(num)}
        <hr/>
        </>
    );
};

export default Table;