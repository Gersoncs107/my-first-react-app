import { useState } from "react";

export default function FunctionalInput({_name}){
    const [todo, setTodo] = useState(["Just some demo tasks", "As an example"])
    const [inputVal, setInputVal] = useState("")
}