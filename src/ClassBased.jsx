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
}

export default FunctionalInput