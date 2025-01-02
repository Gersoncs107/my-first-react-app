 function Button({text, color, backgroundColor, fontSize}){
    const buttonStyle = {
        color: color,
        backgroundColor: backgroundColor,
        fontSize: fontSize +"px"
    }
    return (
        <button style={buttonStyle}>{text}</button>
    )
 }

 Button.defaultProps = {
    text:"Click Me!",
    color: "blue",
    fontSize: 12
 }

 export default function AppButton(){
    return(
    <div>
        <Button/>
        <Button text="Don't Click Me!" color= "red" fontSize={12}/>
        <Button fontSize={20}/>
    </div>
    )
 }