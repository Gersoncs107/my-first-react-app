const name = "Sad Pepe"

function Greeting() {
    // return <h1>&quot;If you don't try to save one life, you'll never save any&quot;</h1>
    return ( 
    <>
    <h1>{name}'s Todos</h1>
    <img 
      src="https://i.imgur.com/segHJlQ.jpeg" 
      alt="Sad Pepe" 
      className="photo" 
    />
    <br/>
    <input type="text" />
    <br/>
    <button style={{
      backgroundColor:"aquamarine",
      borderRadius: "10px"
    }}>Submit</button>
    <ul style={{
      backgroundColor: "black",
      color: "red"
    }}>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
  </>
    )
}

export default Greeting