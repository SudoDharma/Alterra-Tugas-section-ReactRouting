import styles from "./style.module.css"

const ListTodos = ({todo, hapusTodo, checkTodo}) => {
    return(
        <div className={styles.container}>
            <div>
                <label style={{
                    textDecoration : todo.completed ? "line-through" : "none",
                    fontStyle: todo.completed ? "italic" : "normal",
                    color: todo.completed ? "gray" : "black"}}>

                    <input type="checkbox" 
                    onChange={() => {checkTodo(todo.id)}} 
                    checked={todo.completed}/>

                    {todo.title}
                </label>
            </div>
            <button onClick={() => hapusTodo(todo.id)}>Delete</button>
        </div>
    )
}

export default ListTodos