 function Button(props){
    const butonStyle = {
        color: props.color,
        fontSize: props.fontSize
    }
    return (
        <button style={butonStyle}>props.text</button>
    )
 }

 export default function AppButton(){
    return(
    <div>
        <Button/>
        <Button/>
        <Button/>
    </div>
    )
 }