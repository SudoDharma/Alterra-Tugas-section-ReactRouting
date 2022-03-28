import { Link, useLocation } from "react-router-dom"

import styles from "./style.module.css"

const Sidebar = () => {
    const location = useLocation();

    return(
        <div className={styles.sidebar}>
            {location.pathname === "/" &&
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about"><li>ABOUT</li></Link>
                </ul>
            }
            {location.pathname !== "/" &&
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about/about-app"><li>ABOUT APP</li></Link>
                    <Link to="/about/about-author"><li>ABOUT AUTHOR</li></Link>
                </ul>
            }

        </div>
    )
}

export default Sidebar