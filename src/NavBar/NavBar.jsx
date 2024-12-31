import React, { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default NavBar