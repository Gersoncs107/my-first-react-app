 function Button({text, color, backgroundColor, fontSize, handleClick }){
    const buttonStyle = {
        color: color,
        backgroundColor: backgroundColor,
        fontSize: fontSize +"px"
    }
    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    )
 }

 Button.defaultProps = {
    text:"Click Me!",
    color: "blue",
    backgroundColor:"rgb(149, 216, 160)",
    fontSize: 12
 }

 export default function AppButton(){

    const handleButtonClick = () => {
        window.location.href = "https://www.google.com"
    }
    return(
    <div>
        <Button handleClick={handleButtonClick}/>
    </div>
    )
 }