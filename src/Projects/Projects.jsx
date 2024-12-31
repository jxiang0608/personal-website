import React from "react";
import styles from "./Projects.module.css";

import cozoneImg from "./assets/cozone.png";
import finbrodailyImg from "./assets/finbrodaily.png";
import lstmImg from "./assets/lstm.png";
import molezImg from "./assets/molez.png";
import pwImg from "./assets/pw.png";

function Projects(){
    const projects = [
        {
            title: "Personal Website",
            description: "This website!",
            image: pwImg,
            tags: ["CSS", "Figma", "HTML", "Javascript", "React"],
        },
        {
            title: "FinBroDaily",
            description: "An app that allows for convenient browsing of stock data on the go. Allows the user to favorite stock tickers, toggle app brightness, toggle app language between English and Mandarin, etc.",
            image: finbrodailyImg,
            tags: ["Swift"],
        },
        {
            title: "Molez",
            description: "A spin-off on the classic Whack-a-mole game. Includes self-drawn objects and fun music.",
            image: molezImg,
            tags: ["PowerPoint", "Swift"],
        },
        {
            title: "Sales Modeling with Economic Indicators",
            description: "A group research project that developed long short-term memory networks in Python and TensorFlow to forecast future sales based on time-series data.",
            image: lstmImg,
            tags: ["PowerPoint", "Python"],
        },
        {
            title: "Cozone",
            description: "A productivity app that allows users to match with other students from their classes for collaboration purposes.",
            image: cozoneImg,
            tags: ["Figma", "Git", "Swift", "PowerPoint", "Javascript"],
        },
    ]

    return(
        <section className={styles.projectsSection}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <img src={project.image} alt={project.title} className={styles.image} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDescription}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects