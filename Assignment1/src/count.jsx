import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0)
    const multiply = () => {
        setCount(count => count * 2)
    }
    
    const add = () => {
        setCount(count => count + 2)
    }

    const reset = () => {
        setCount(0)
    }
    
    return (
        <>
            <div>
                <button onClick={multiply} className="m-[20px] p-[20px]">Multiply by 2</button>
                <button onClick={add} className="m-[20px] p-[20px]">Add 2</button>
                <button onClick={reset} className="m-[20px] p-[20px]">Reset</button>
                <p className="border border-black-800 bg-black">Number: {count}</p>
            </div>
        </>
    )
}
