import {useState} from "react";
import '../App.css'

function MyButton(){


    const [count, setCount]= useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <>
            <button className="my-button" onClick={handleClick}>
            Click me {count} times
            </button>        
        </>
    );
}

export  default MyButton;
