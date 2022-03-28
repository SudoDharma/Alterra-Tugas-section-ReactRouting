import { useState } from "react";

import styles from "./style.module.css"

import Form from "../../components/Form"
import List from "../../components/List"
import Sidebar from "../../components/Sidebar"

const Home = () => {
    const [data, setData] = useState([
        {
          id: 1,
          title: "Mengerjakan exercise",
          completed: true
        },
        {
          id: 2,
          title: "Mengerjakan assignment",
          completed: false
        },
    ])
    
    const tambahTodo = (newData) => {
        let countData = (data.length !== 0) ? (data[data.length - 1].id) : 0;   //If there is no data, then countData is 0,  
        const newTodo = {id: countData + 1, ...newData}                         //else it is latest object's id
    
        setData([...data, newTodo])
    }
    
    const hapusTodo = (id) => {
        const newListTodos = data.filter((item) => item.id !== id)
        
        setData(newListTodos)
    }
    
    const checkTodo = (id) => {
        const newStatus = data.map((data) => {
            if(data.id === id){
                return {...data, completed: !data.completed}    //If id is the same then invert the 'completed' key's value
            }
            else{
                return data
            }
        })
        setData(newStatus)
    }

    return (
        <>
            <Sidebar/>
            <div className={styles.container}>
                <Form tambahTodo={tambahTodo}/>
                <List todos={data} hapusTodo={hapusTodo} checkTodo={checkTodo}/>
            </div>
        </>
    );
}

export default Home