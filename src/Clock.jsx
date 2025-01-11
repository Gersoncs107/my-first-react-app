import { useState } from "react";

export default function Clock(){
    const [count, setCount] = useState(0)

    setInterval(() => {
        setCount(count => count + 1)
    }, 1000);

}