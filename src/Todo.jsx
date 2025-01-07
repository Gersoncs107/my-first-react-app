//  function Button({text = "Click Me", color = "blue", backgroundColor = "rgb(30, 160, 177)", fontSize = 20, handleClick }){
//     const buttonStyle = {
//         color: color,
//         backgroundColor: backgroundColor,
//         fontSize: fontSize +"px"
//     }
//     return (
//         <button onClick={handleClick} style={buttonStyle}>
//             {text}
//         </button>
//     )
//  }

//  Button.defaultProps = {
//     text:"Click Me!",
//     color: "blue",
//     backgroundColor:"rgb(149, 216, 160)",
//     fontSize: 20
//  }

//  export default function AppButton(){

//     const handleButtonClick = (url) => {
//         window.location.href = url
//     }
//     return(
//     <div style={{backgroundColor: "rgb(23, 151, 98)", width:"400px", height:"100px"}}>
//         <Button handleClick={() => handleButtonClick("https://www.google.com")} />
//     </div>
//     )
//  }
import { useState } from "react";

export default function Person(){
    const [person, setPerson] = useState({name:"Madruga", age: 100})

    const handleIncreaseAge = () => {
        const newPerson = {...person, age: person.age + 1}
        setPerson(newPerson)
    }

    const handleDecreaseAge = () =>{
        const _newPerson = {...person, age:person.age - 1}
        setPerson(_newPerson)
    }

    return(
        <div>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleDecreaseAge}></button>
            <button onClick={handleIncreaseAge}>Increase Age</button>
        </div>
    )
}