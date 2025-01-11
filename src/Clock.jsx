import { useEffect ,useState } from "react";

export default function Clock(){
    const [counter, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
    })
    

    return(
        <div>
            <h2>{counter} Seconds have passed...</h2>
        </div>
    )
}