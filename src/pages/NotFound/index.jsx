import styles from "./style.module.css"

import { Link } from "react-router-dom"

import image from "../../assets/img/2456051.jpg"

const NotFound = () => {
    return(
        <div className={styles.container}>
            <img src={image} alt="notfound" />
            <h1>Page Not Found</h1>
            <Link to="/">
                <div className={styles.button}>Back To Home</div>
            </Link>
        </div>
    )
}

export default NotFound