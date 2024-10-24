import { useState } from "react"

export default function Counter(){

    let [count , setCount]=useState(0)

    let addValue = ()=>{
        if (count ==20){
            setCount(count=20)
            alert("You have reached maximum limit")
        }else{
            setCount(count+1)
        }
    }

    let removeValue = ()=>{
        if (count<=-10){
            setCount(count=-10)
            alert("you have reaced minimum limit")
        }else{
            setCount(count-1)
        }
    }
    let resetValue = ()=>{
        setCount(count=0)
    }
    return(
        <>
        <h1 style = {{color: count>0?"green":count<0?"red":"white"}}>{count}</h1>
        <button onClick={addValue}>Increase</button>
        <button onClick={resetValue} style={{color:"white"}}>Reset</button>
        <button onClick={removeValue}>Decrease</button>
        </>
    )
}