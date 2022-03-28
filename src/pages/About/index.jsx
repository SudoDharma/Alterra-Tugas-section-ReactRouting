import styles from "./style.module.css"

import Sidebar from "../../components/Sidebar"

import { Outlet } from "react-router-dom"

const About = () => {
    return(
        <>
            <Sidebar/>
            <div className={styles.container}>
                <Outlet/>
            </div>
        </>
    )
}

export default About