const todos = [
    {task: "mow yard", id: crypto.randomUUID()},
    {task: "Work on Odin Projects", id: crypto.randomUUID()},
    {task: "Feed the cat", id: crypto.randomUUID()}
]

export function TodoList(){
     return(
        <ul>
            {todos.map( todo => {
                return <li key={todo.id}>{todo.task}</li>
            })}
        </ul>
     )
}