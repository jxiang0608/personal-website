import React from "react";
import styles from './SkillCard.module.css';

function SkillCard({ name, icon }){
    return(
        <div>
            <div className={styles.card}>
                <img
                    src={icon}
                    alt={name}
                    className={styles.icon}
                />
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    );
}
export default SkillCard