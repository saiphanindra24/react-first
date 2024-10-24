import { useState } from "react"

export default function Counter(){

    let [count , setCount]=useState(0)

    let addValue = ()=>{
        if (count ==20){
            setCount(count=20)
        }else{
            setCount(count+1)
        }
    }

    let removeValue = ()=>{
        if (count<=0){
            setCount(count=0)
        }else{
            setCount(count-1)
        }
    }
    return(
        <>
        <h1>COUNTER:{count}</h1>
        <button onClick={addValue}>Increase</button>
        <button onClick={removeValue}>Decrease</button>
        </>
    )
}