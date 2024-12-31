 function Button(props){
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize
    }
    return (
        <button style={buttonStyle}>{props.text}</button>
    )
 }

 export default function AppButton(){
    return(
    <div>
        <Button text= "Click Me!"color="blue" fontSize={12}/>
        <Button/>
        <Button/>
    </div>
    )
 }