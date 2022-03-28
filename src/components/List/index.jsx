import styles from "./style.module.css"

import ListTodos from "../ListTodos"

const List = ({todos, hapusTodo, checkTodo}) => {
    return(
        <div className={styles.container}>
            {todos.map((todo, todoIdx) => <ListTodos todo={todo} hapusTodo={hapusTodo} checkTodo={checkTodo} key={todoIdx}/> )}
        </div>
    )
}

export default List