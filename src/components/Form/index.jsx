import { useState } from "react"

import styles from "./style.module.css"

const Form = ({tambahTodo}) => {
    const [inputs, setInputs] = useState({
        title: "",
        completed: false
    })
    
    const onChange = (e) => {
        setInputs({
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputsNotEmpty = inputs.title
    
        if(inputsNotEmpty){
            const newData = {
                title: inputs.title,
                completed: false
            }
            tambahTodo(newData);
            setInputs({
                title: "",
                completed: false
            })
        }
        else{
            alert("Inputan tidak boleh kosong");
        }
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.header}>todos</h1>
            <div className={styles.input_container}>
                <input type="text" placeholder="Add todo..." value={inputs.title} name="title" onChange={(e) => {onChange(e)}} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Form