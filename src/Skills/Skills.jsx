import React from 'react';
import SkillCard from './SkillCard';
import styles from './Skills.module.css';

// Import images
import accessImg from "./img/access.png";
import cImg from "./img/c.png";
import cssImg from "./img/css.png";
import excelImg from "./img/excel.png";
import figmaImg from "./img/figma.png";
import htmlImg from "./img/html.png";
import javaImg from "./img/java.png";
import jsImg from "./img/js.png";
import powerpointImg from "./img/powerpoint.png";
import pythonImg from "./img/python.png";
import rImg from "./img/r.png";
import reactImg from "./img/react.png";
import swiftImg from "./img/swift.png";

function Skills(){
    
    const skills = [
        { name: "Access", icon: accessImg},
        { name: "C", icon: cImg},
        { name: "CSS", icon: cssImg},
        { name: "Excel", icon: excelImg},
        { name: "Figma", icon: figmaImg},
        { name: "HTML", icon: htmlImg},
        { name: "Java", icon: javaImg},
        { name: "JavaScript", icon: jsImg},
        { name: "PowerPoint", icon: powerpointImg},
        // { name: "Microsoft SQL", icon: <SiMicrosoftsqlserver />},
        { name: "Python", icon: pythonImg},
        { name: "R", icon: rImg},
        { name: "React", icon: reactImg},
        // { name: "RStudio", icon: <SiRstudio />},
        { name: "Swift", icon: swiftImg},
    ];

    return(
        <div className={styles.skillsBG}>
            <section className={styles.skillsSection}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills