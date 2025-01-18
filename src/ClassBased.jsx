import { useState } from "react";

const FunctionalInput = ({_name}) => {
    const [todo, setTodos] = useState(["Just some demo tasks", "As an example"])
    const [inputVal, setInputVal] = useState("")

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmitt = (e) =>{
        e.preventDefault()
        setTodos((todo) => [...todo, inputVal])
        setInputVal("")
    }

    return(
        <section>
            <h3>{Name}</h3>
            <form onSubmit={handleSubmitt}>
             <label htmlFor="task-entry">Enter a task</label>
                

            </form>

        </section>
    )
}

export default FunctionalInput