const person = {
  name: "Sad Pepe",
  theme: {
    backgroundColor: "black",
    color: 'red'
  }
}

function ListAnimal(props){
  return <li>{props.animal}</li>
}



function Animal(){

  const animals = ["Lion", "Cow", "Snake", "Lizard"]
  const animalList = animals.map( animal => <li key= {animal}>{animal}</li>)
  
  return (
    <>
      <h1>Animals:</h1>
      <ul>
        {animalList}
      </ul>
    
    </>
  )
}

// function Greeting() {
//     // return <h1>&quot;If you don't try to save one life, you'll never save any&quot;</h1>
//     return ( 
//     <div style={{backgroundColor:"black", color: "purple", width: "600px"}}>
//     <h1>{person.name}'s Todos</h1>
//     <img style={{
//       borderRadius:"10px"
//     }}
//       src="https://i.imgur.com/segHJlQ.jpeg" 
//       alt="Sad Pepe" 
//       className="photo" 
//     />
//     <br/>
//     <input type="text" />
//     <br/>
//     <button style={{
//       backgroundColor:"aquamarine",
//       borderRadius: "10px"
//     }}>Submit</button>
//     <ul>
//       <li>Invent new traffic lights</li>
//       <li>Rehearse a movie scene</li>
//       <li>Improve the spectrum technology</li>
//     </ul>
//   </div>
//     )
// }

export default Animal