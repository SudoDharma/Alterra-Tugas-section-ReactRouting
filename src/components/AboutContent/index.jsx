import styles from "./style.module.css"

const AboutContent = ({header, text}) => {
    return(
        <div className={styles.container}>
            <h1>About the {header}</h1>
            <p>{text}</p>
        </div>
    )
}

export default AboutContent