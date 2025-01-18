import { useState } from "react";

const FunctionalInput = ({_name}) => {
    const [todos, setTodos] = useState(["Just some demo tasks", "As an example"])
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
            <h3>{_name}</h3>
            <form onSubmit={handleSubmitt}>
             <label htmlFor="task-entry">Enter a task</label>
              <input type="text"
              name="task-entry"
              value={inputVal}
              onChange={handleInputChange} />  

              <button type="submit">Submit</button>  
            </form>

            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>

        </section>
    )
}

export default FunctionalInput