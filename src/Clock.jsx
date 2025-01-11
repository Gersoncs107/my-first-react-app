import { useEffect ,useState } from "react";

export default function Clock(){
    const [counter, setCount] = useState(0)

    useEffect(() => {
       const key = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);

        return ()=> {
            clearInterval(key)
        }
        

    },[])
    
    return(
        <div>
            <h1>{counter}</h1>
            <h2>Seconds have passed...</h2>
        </div>
    )
}