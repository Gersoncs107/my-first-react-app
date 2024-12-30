const todos = [
    {task: "mow yard", id: crypto.randomUUID()},
    {task: "Work on Odin Projects", id: crypto.randomUUID()},
    {task: "Feed the cat", id: crypto.randomUUID()}
]

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function TodoList(){
     return(
     <div style={{color: "blue", backgroundColor:"aquamarine", width: "500px", height: "400px"}}>
        <ul style={{textAlign: "left"}}>
            {todos.map( todo => {
               return <li key={todo.id}>{todo.task}</li>
            })}
        </ul>
     </div>
     )
}